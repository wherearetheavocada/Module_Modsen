function sumFirstAndLastDigit(number) {
    // Преобразуем число в строку, чтобы получить первую и последнюю цифры
    let numberStr = number.toString();
    
    // Первая цифра
    let firstDigit = parseInt(numberStr[0]);
    
    // Последняя цифра
    let lastDigit = parseInt(numberStr[numberStr.length - 1]);
    
    // Сумма первой и последней цифры
    let sum = firstDigit + lastDigit;
    
    // Выводим результат в консоль
    console.log("Сумма первой и последней цифры:", sum);
}

sumFirstAndLastDigit(12345); 