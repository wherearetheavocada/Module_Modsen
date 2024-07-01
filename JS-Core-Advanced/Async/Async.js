async function fetchApi1() {
    const response = await fetch('https://api/data1');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
}

async function fetchApi2() {
    const response = await fetch('https://api/data2');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
}

async function fetchApi3() {
    const response = await fetch('https://api/data3');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
}


async function fetchMultipleApis() {
    try {
        const results = await Promise.all([fetchApi1(), fetchApi2(), fetchApi3()]);
        const combinedResult = {
            api1Data: results[0],
            api2Data: results[1],
            api3Data: results[2]
        };
        return combinedResult;
    } catch (error) {
        console.error('Error fetching data from APIs:', error);
        throw error;  
    }
}


fetchMultipleApis()
    .then(combinedResult => {
        console.log('Combined Result:', combinedResult);
    })
    .catch(error => {
        console.error('Error:', error);
    });