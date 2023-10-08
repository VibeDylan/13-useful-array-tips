let friends = [
    { name: "John", email: "john@gmail.com" },
    { name: "Antoine", email: "antoine@gmail.com" },
    { name: "Lucas", email: "lucas@gmail.com" },
    { name: "Véronique", email: "veronique@gmail.com" },
    { name: "Lisa", email: "lisa@gmail.com" },
    { name: "Estere", email: "estere@gmail.com" },
];

let friendsName = Array.from(friends, ({ name }) => name);
console.log(friendsName);
