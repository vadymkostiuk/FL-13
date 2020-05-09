const Fighter = function (param) {
  const MAX_HEALTH = 100;
  const name = param.name;
  const damage = param.damage;
  const strength = param.strength;
  const agility = param.agility;
  let health = param.hp;
  let wins = 0;
  let losses = 0;

  this.getName = () => name;

  this.getDamage = () => damage;

  this.getStrength = () => strength;

  this.getAgility = () => agility;

  this.getHealth = () => health;

  this.logCombatHistory = () => `Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`;

  this.addWin = plusWin => {
    wins += plusWin;
  };

  this.addLoss = plusLoss => {
    losses += plusLoss;
  };

  this.attack = (fighter2) => {
    const MAX_SUCCESS = 100;
    const random = Math.random() * MAX_SUCCESS;
    const probOfAttack = MAX_SUCCESS - (strength + agility) ;
    let isAttack = false;

    if (random < probOfAttack) {
      isAttack = true;
    }

    if (isAttack) {
      health = this.getHealth() - this.getDamage();
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter2.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }

    if (this.getHealth() < 0) {
      health = 0;
    }

  };

  this.heal = (plusHealth) => {
    health += plusHealth;

    if (health >= MAX_HEALTH) {
      health = MAX_HEALTH;
    }

  };

  this.dealDamage = (minusHealth) => {
    health -= minusHealth;

    if (health <= 0) {
      health = 0;
    }

  };

};

const battle = (fighter1, fighter2) => {
  if(fighter1.getHealth() && fighter2.getHealth() > 0 ) {

    for (let i = 0; i <= fighter1.getHealth(i) || i <= fighter2.getHealth(i); i++) {
      fighter1.attack(fighter2);
      fighter2.attack(fighter1);

      if (fighter2.getHealth() <= 0) {
        console.log(`${fighter1.getName()} has won!`);
        fighter1.addWin(1);
        fighter2.addLoss(1);
        break;
      } else if (fighter1.getHealth() <= 0) {
        console.log(`${fighter2.getName()} has won!`);
        fighter2.addWin(1);
        fighter1.addLoss(1);
        break;
      }

    }

  } else if (fighter1.getHealth() <= 0){
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
  }

};

const fighter1 = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 25
});

const fighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 25,
  strength: 20,
  agility: 25
});