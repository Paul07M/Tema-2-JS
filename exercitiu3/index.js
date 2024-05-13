const numbers = ['2', '10', '12', '20', '25']

for (let i = 0; i < numbers.length; i += 1) {
    const index = (numbers.length - 1) - i;
    console.log(numbers[index]);