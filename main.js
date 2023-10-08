let fruits = ["banane", "orange", "pomme", "raison", "banane", "orange", "cerise"]

let uniqueFruit = [...new Set(fruits)];

uniqueFruit.map((el) => {
    console.log(el);
});