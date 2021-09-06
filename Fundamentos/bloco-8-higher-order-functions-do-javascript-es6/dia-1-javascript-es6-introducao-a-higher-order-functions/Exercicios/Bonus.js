const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const danoMinimo = 15;
  const { strength } = dragon;
  const dragonDamage = Math.floor((Math.random() * (strength - danoMinimo + 1) + danoMinimo));
  return dragonDamage;
};

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const danoMinimo = warrior.strength;
  const danoMaximo = danoMinimo * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (danoMaximo - danoMinimo + 1)) + danoMinimo);
  return warriorDamage;
};

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const danoMinimo = mage.intelligence;
  const danoMaximo = danoMinimo * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Nao possui Mana Suficente',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (danoMaximo - danoMinimo + 1)) + danoMinimo);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  results: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.table(gameActions.results());

// Metodo que fiz primeiro
// const dragonDamage = (dragon) => {
//   const strength = dragon.strength
//   let damage = Math.floor(Math.random() * strength);
//   if (damage <= 15) {
//     return 15;
//   }
//   return damage;
// }
// // console.log(dragonDamage(dragon))


// const warriorDamage = (warrior) => {
//   const weaponDmg = warrior.weaponDmg;
//   const strength = warrior.strength;
//   const maxDamage = strength * weaponDmg;
//   let damage = Math.floor(Math.random() * maxDamage);
//   if (damage <= strength) {
//     return strength;
//   }
//   return damage;
// }
// // console.log(warriorDamage(warrior))


// const mageDamageMana = (mage) => {
//   let intelligence = mage.intelligence
//   let mana = mage.mana
//   let maxDamage = intelligence * 2;
//   let finalDamage = 0
//   let damage = Math.floor(Math.random() * maxDamage);
//   if (damage <= intelligence) {
//     finalDamage = intelligence;
//     if (mana < 15) {
//       return ({ dano: 'Não possui mana suficiente', manaGasta: 0 });
//     } else {
//       finalDamage = damage
//       if (mana < 15) {
//         return ({ dano: 'Não possui mana suficiente', manaGasta: 0 });
//       }
//     }
//   }
//   return ({ dano: damage, manaGasta: 15 });
// }
// // console.log(mageDamageMana(mage))

// const gameActions = {
//   warriorTurn: (warriorDamage) => {
//     const warriorAtk = warriorDamage(warrior);
//     warrior.damage = warriorAtk;
//     dragon.healthPoints -= warriorAtk
//   },
//   mageTurn: (mageDamageMana) => {
//     const mageAtk = mageDamageMana(mage);
//     const { manaGasta } = mageDamageMana;
//     mage.damage = mageAtk;
//     mage.mana -= manaGasta;
//     dragon.healthPoints -= mageAtk;
//   },
//   dragonTurn: (dragonDamage) => {
//     const dragonAtk = dragonDamage(dragon);
//     dragon.damage = dragonAtk;
//     warrior.healthPoints -= dragonAtk;
//     mage.healthPoints -= dragonAtk;
//   },
//   resultado: () => battleMembers,
// };

// gameActions.warriorTurn(warriorDamage);
// gameActions.mageTurn(mageDamageMana);
// gameActions.dragonTurn(mageDamageMana);
// console.log(gameActions.resultado());
