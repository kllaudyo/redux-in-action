import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
const makeCall = ({endpoint, method='GET', body}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const params = {
        method,
        url,
        data: body,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return axios(params)
        .then(response => response)
        .catch(err => err);

};


export const CALL_API = 'CALL_API';

const apiMiddleware = store => next => action => {
    const callApi = action[CALL_API];
    if(typeof callApi === 'undefined')
        return next(action);

    const { endpoint, method, body} = callApi;
    const [requestStartedType, successType, failureType] = callApi.types;
    next({type: requestStartedType});

    //todo(1) para realmente tornar generico usar o payload
    makeCall({endpoint, method, body})
        .then(response => {
                console.log(response);
                return next({type: successType, data: response.data})
            }
        )
        .catch(err =>
            next({type: failureType, error: err.message})
        );

};

export default apiMiddleware;