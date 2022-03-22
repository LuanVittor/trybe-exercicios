export function convert(value: number, base: string, convert: string) {
  const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

  function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}
  if (!units.includes(base)) makeError(base); // se a unidade base não for válida lançamos um erro
  if (!units.includes(convert)) makeError(convert); // se a unidade para a conversão não for válida lançamos um erro

  const forIndex = units.indexOf(base); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(convert); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

export function convertWeight(value: number, base: string, convert: string) {
  const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

  function makeError(unity: string) {
      throw new Error(`A unidade ${unity} não é uma unidade válida.`)
  }

  if (!units.includes(base)) makeError(base);
  if (!units.includes(convert)) makeError(convert); 

  const forIndex = units.indexOf(base); 
  const toIndex = units.indexOf(convert); 
  const exponent = (toIndex - forIndex); 

  return value * Math.pow(10, exponent);
}

export function capacity(value: number, base: string, convert: string) {
  const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

  function makeError(unity: string) {
      throw new Error(`A unidade ${unity} não é uma unidade válida.`)
  }

  if (!units.includes(base)) makeError(base);
  if (!units.includes(convert)) makeError(convert); 

  const forIndex = units.indexOf(base); 
  const toIndex = units.indexOf(convert); 
  const exponent = (toIndex - forIndex); 

  return value * Math.pow(10, exponent);
}

export function area(value: number, base: string, convert: string) {
  const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

  function makeError(unity: string) {
      throw new Error(`A unidade ${unity} não é uma unidade válida.`)
  }

  if (!units.includes(base)) makeError(base);
  if (!units.includes(convert)) makeError(convert); 

  const forIndex = units.indexOf(base); 
  const toIndex = units.indexOf(convert); 
  const exponent = (toIndex - forIndex); 

  return value * Math.pow(10, exponent);
}

type character = {
  nickname: string;
  class: string;
  stats: { agi: number, str: number, int: number, hp: number, mp: number };
  createdAt: Date;
};

const characters: character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: character, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);