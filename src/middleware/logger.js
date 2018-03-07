export default store => next => action => {
    console.group(action.type);
    console.log('dispatching: ', action);
    //armazena o result apenas para retornar...
    const result = next(action);
    console.log('next state: ', store.getState());
    console.groupEnd(action.type);
    return result;
};