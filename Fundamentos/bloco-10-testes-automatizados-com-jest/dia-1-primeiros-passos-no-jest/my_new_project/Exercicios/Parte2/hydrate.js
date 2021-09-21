const hydrate = (string) => {
  const split = string.split(' ');
  let num = 0;
  for (let i in split) {
    if (parseInt(split[i])) {
      num += Number(split[i]);
    }
  }
  return (num === 1) ? '1 copo de água' : `${num} copos de água`
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))

module.exports = hydrate;