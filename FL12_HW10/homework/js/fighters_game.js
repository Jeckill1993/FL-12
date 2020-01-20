

function Fighter(obj){
    let wins = 0;
    let loses = 0;
    let HP = obj.hp;
    

    return {
        getName: function() {
            return obj.name;
        },
        getDamage: function() {
            return obj.damage;
        },
        getStrength: function() {
            return obj.strength;
        },
        getAgility: function() {
            return obj.agility;
        },
        getHealth: function() {
            return HP;
        },
        attack: function(defender) {
            let blockDamage = 100 - (defender.getStrength() + defender.getAgility());
            let attackDamage = Math.random() * 100;
            if(attackDamage > blockDamage) {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        },
        logCombatHistory: function() {
            console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`);
        },
        heal: function(healValue) {
            let healHealth = HP + healValue;
            if (healHealth > obj.hp) {
                healHealth = obj.hp;
            } else {
                HP = healHealth;
            }
        },
        dealDamage: function(damageValue) {
            if (HP > damageValue) {
                HP -= damageValue;
            } else {
                HP = 0;
            }
        },
        addWin: function() {
            ++wins;
        },
        addLoss: function() {
            ++loses;
        }
    }
}

function battle(fighter1, fighter2) {
    if(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
    
        if(fighter1.getHealth === 0) {
            fighter2.addWin();
            fighter1.addLoss();
        } else{
            fighter1.addWin();
            fighter2.addLoss();
        }
    } else {
        console.log(`Battle won't be simulated`);
    }   
}



const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20})
console.log(fighter1.getName());
console.log(fighter2.getName());
battle(fighter1, fighter2);

