const user = { nom: "Alice", age: 25 };
const contact = { email: "alice@mail.com", ville: "Paris" };

const profil = {}

Object.assign(profil, user, contact)

console.log(profil);
