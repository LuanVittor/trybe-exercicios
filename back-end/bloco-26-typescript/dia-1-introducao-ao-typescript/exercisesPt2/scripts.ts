export function convert(value: number, base: string, convert: string) {
enum unidades {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 1,
  cm = 10,
  mm = 100
}

  if (base === 'km') return value / 1000
  if (base === 'hm') return value / 100
  if (base === 'dam') return value / 10
  if (base === 'm') return value 
  if (base === 'dm') return 1 / value 
  if (base === 'cm') return 10 / value 
  if (base === 'mm') return 100 / value 
}

export function convertWeight(value: number, base: string, convert: string) {
  if (base === 'kg') return value / 1000
  if (base === 'hg') return value / 100
  if (base === 'dag') return value / 10
  if (base === 'g') return value 
  if (base === 'dg') return 1 / value 
  if (base === 'cg') return 10 / value 
  if (base === 'mg') return 100 / value 
}