import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
const makeCall = endpoint =>
    client.get(endpoint)
        .then(response => response)
        .catch(err => err);

export const CALL_API = 'CALL_API';

const apiMiddleware = store => next => action => {
    const callApi = action[CALL_API];
    if(typeof callApi === 'undefined')
        return next(action);

    const [requestStartedType, successType, failureType] = callApi.types;
    next({type: requestStartedType});

    //todo(1) para realmente tornar generico usar o payload
    makeCall(callApi.endpoint)
        .then(response =>
            next({type: successType, data: [...response.data]})
        )
        .catch(err =>
            next({type: failureType, error: err.message})
        );

};

export default apiMiddleware;