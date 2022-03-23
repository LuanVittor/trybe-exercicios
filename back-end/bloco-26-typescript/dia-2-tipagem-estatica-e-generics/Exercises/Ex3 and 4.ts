type Slices = 4|6|8
type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";


interface Pizza {
  flavor: Common | Vegetarian | Sugar
  slices: Slices
}

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}

console.log(nutela);

const PizzaCommon: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

