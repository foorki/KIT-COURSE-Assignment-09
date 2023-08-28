const numbers = [1, 2, 3, 4, 5, 6];

for (const number of numbers) {
    const isEven = number % 2 === 0 ? "even" : "odd";
    console.log(`${number} is ${isEven}`);
}
