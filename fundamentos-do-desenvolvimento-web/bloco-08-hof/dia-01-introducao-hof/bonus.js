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

const dragonDamage = () => {
  const damage = {damage: Math.floor(Math.random() * (dragon.strength - 15)) + 15};
  return damage;
}

const warriorDamage = () => {
  const damage = {damage: Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength};
  return damage;
}

const mageSpell = () => ({
  damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
  mana: mage.mana > 0 ? mage.mana - 15:'Não possui mana suficiente',
});

const gameActions = {
  warriorAttack: () => {
    const damage = warriorDamage();
    Object.assign(warrior, damage);
    const newDragonHealth = dragon.healthPoints - warrior.damage;
    Object.assign(dragon, {healthPoints: newDragonHealth});

    return battleMembers;
  },
  mageAttack: () => {
    const damage = mageSpell();
    Object.assign(mage, damage);
    const newDragonHealth = dragon.healthPoints - mage.damage;
    Object.assign(dragon, {healthPoints: newDragonHealth});

    return battleMembers;
  },
  dragonAttack: () => {
    const damage = dragonDamage();
    Object.assign(dragon, damage);
    const newMageHealth = mage.healthPoints - dragon.damage;
    const newWarriorHealth = warrior.healthPoints - dragon.damage;
    Object.assign(mage, {healthPoints: newMageHealth});
    Object.assign(warrior, {healthPoints: newWarriorHealth});

    return battleMembers;
  },
}

console.log(gameActions.warriorAttack(warriorDamage));
console.log(gameActions.mageAttack(mageSpell));
console.log(gameActions.dragonAttack(dragonDamage));

