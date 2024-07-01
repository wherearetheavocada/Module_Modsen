"use strict";

function countVowels(str) {
    // Определяем гласные буквы
    const vowels = "AEIOUaeiou";
    let count = 0;
    
    // Проходим по строке и считаем количество гласных
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const text = "Hello, World!";
console.log(countVowels(text));