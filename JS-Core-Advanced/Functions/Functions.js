function firstNonRepeatingCharacter(str) {

    let charCount = {};

    // Проходим по строке и считаем количество вхождений каждого символа
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Проходим по строке снова, чтобы найти первый символ с количеством вхождений 1
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log("Первый неповторяющийся символ:", firstNonRepeatingCharacter("swiss"));