function sumOfSquares(array) {
    
    let sum = array.reduce((acc, num) => acc + num * num, 0);
    
    return sum;
}

let result = sumOfSquares([1, 2, 3, 4, 5]);
console.log("Сумма квадратов элементов массива:", result);