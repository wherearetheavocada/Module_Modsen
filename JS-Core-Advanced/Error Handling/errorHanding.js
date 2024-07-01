function divideNumbers(num1, num2) {
    if (num2 === 0) {
        throw new Error("Деление на ноль невозможно");
    }
    return num1 / num2;
}

try {
    console.log(divideNumbers(10, 0));  // Это вызовет ошибку
} catch (error) {
    console.error(error.message);  // Выведет сообщение об ошибке в консоль
}