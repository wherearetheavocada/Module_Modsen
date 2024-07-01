function randomDelay() {
    return new Promise((resolve, reject) => {

        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Generated number: ${randomNumber}`);


        const delayInSeconds = randomNumber;


        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Success: Number ${randomNumber} is in the range 1-5.`);
            } else {
                reject(new Error(`Error: Number ${randomNumber} is in the range 6-10.`));
            }
        }, delayInSeconds * 1000);
    });
}


randomDelay()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });