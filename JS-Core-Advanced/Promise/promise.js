function fetchApi1() {
    return fetch('https://api/data1')
        .then(response => response.json());
}

function fetchApi2() {
    return fetch('https://api/data2')
        .then(response => response.json());
}

function fetchApi3() {
    return fetch('https://api/data3')
        .then(response => response.json());
}

function fetchMultipleApis() {
    return Promise.all([fetchApi1(), fetchApi2(), fetchApi3()])
        .then(results => {

            const combinedResult = {
                api1Data: results[0],
                api2Data: results[1],
                api3Data: results[2]
            };
            return combinedResult;
        });
}


fetchMultipleApis()
    .then(combinedResult => {
        console.log('Combined Result:', combinedResult);
    })
    .catch(error => {
        console.error('Error fetching data from APIs:', error);
    });