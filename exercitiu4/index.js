
const numbersVowels = (str) => {
    str = str.toLowerCase();

    const vowels = "aeiou";

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (vowels.includes(el)) {
            count++;

        }

    }
    return count;
}

let str = "Tema pentru acasa este gata.";
console.log("Numarul de vocale din acest string:\n" + str + "\nResult:" + numbersVowels(str));