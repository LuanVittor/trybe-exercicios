function techList(array, name) {
  array.sort();
  if(array.length === 0) return 'Vazio!';
  return array.map((element) => ({ tech: element, name: name}));
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

module.exports = techList;