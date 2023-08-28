const people = [
    { name: "Furqan", age: 23, address: { city: "Karachi" } },
    { name: "Ali", age: 22 },
    { name: "Bilal", age: 30, address: { city: "Lahore" } },
    { name: "Khan", age: 28 },
];

for (const person of people) {
    const city = person.address?.city; 
    if (city !== undefined) {
        console.log(`${person.name}'s city is ${city}`);
    } else {
        console.log(`${person.name} does not have an address.`);
    }
}
