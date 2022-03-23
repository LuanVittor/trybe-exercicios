type Slices = 4|6|8

interface Pizza {
  flavor: string
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
