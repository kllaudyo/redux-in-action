const analytics = store => next => action => {
    if(!action || !action.meta || !action.meta.analytics)
        return next(action);

    const { event, data } = action.meta.analytics;
    fakeAnalyticsApi(event, data);
    return next(action);
};

function fakeAnalyticsApi(eventName, data){
    return new Promise((resolve, reject) => {
        console.group("Analytics say ==> ");
        console.log("You event is ", eventName);
        console.log("You data are ", data);
        console.groupEnd();
        resolve("Success");
    })
};

export default analytics;