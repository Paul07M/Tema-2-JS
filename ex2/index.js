
const numbers = [2, -5, 10, 16, 40];

let sum = numbers.reduce(all_numbers);

function all_numbers(total, value, index, array) {

    return total + value;
}

console.log("Aceasta este suma " + sum);


