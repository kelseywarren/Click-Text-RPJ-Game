const button1 = document.getElementById("button1");
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const button5 = document.getElementById('inventoryMenu');
//const button6 = document.getElementById('enemyInfo');

const button0 = document.getElementById('wep0');

const button7 = document.getElementById('wep1');

const button8 = document.getElementById('wep2');

const button9 = document.getElementById('wep3');

const button10 = document.getElementById('wep4');

const button11 = document.getElementById('wep5');

const text = document.getElementById('text');

const healthText = document.getElementById('healthValue');
const coinsText = document.getElementById('coinsValue');
const levelText = document.getElementById('levelValue');
const weaponText = document.getElementById('equippedValue');


const enemyNameText = document.getElementById('enemyNameValue');
const enemyHealthText = document.getElementById('enemyHealthValue');
const enemyLevelText = document.getElementById('enemyLevelValue');

let health = 100;
let coins = 1000;
let level = 10;
let battle;
let equippedWeapon = 0;
let hideWep;
let inventory = ['Short Sword'];

const weapons = [
  {
    name: "Short Sword",
    power: 3,
    level: 1,
    cost: 0
  },
  {
    name: "Kinetic Dagger",
    power: 7,
    level: 2,
    cost: 25

  },
  {
    name: "Gunblade",
    power: 16,
    level: 4,
    cost: 40
  },
  {
    name: "Great Axe",
    power: 32,
    level: 6,
    cost: 70
  }, 
  {
    name: "Ethereal Sword",
    power: 64,
    level: 8,
    cost: 105
  },
  {
    name: "Soul Sword",
    power: 128,
    level: 10,
    cost: 200
  }  
];
  
const enemies = [
  {
    name: "Fire Fly",
    health: 100,
    level: 1,
    power: 5
  },
  {
    name: "BeamBot",
    health: 120,
    level: 2,
    power: 10
  },
  {
    name: "Heatray",
    health: 130,
    level: 3,
    power: 20
  },
  {
    name: "Snake",
    health: 140,
    level: 4,
    power: 40
  },
  {
    name: "Silver Lion",
    health: 150,
    level: 5,
    power: 55
  },
  {
    name: "Mammoth",
    health: 160,
    level: 6,
    power: 70
  },
  {
    name: "Stealth Whale",
    health: 170,
    level: 7,
    power: 80
  }, 
  {
    name: "Electric Mass",
    health: 180,
    level: 8,
    power: 100
  },
  {
    name: "King Shadow",
    health: 200,
    level: 10,
    power: 150
  }
];

button1.onclick = goMatrix;
button2.onclick = goForest;
button3.onclick = goAbyss;
button4.onclick = goStore;

button5.onclick = goInventory; 
//button6.onclick = enemyInfo; 

button7.onclick = buyDagger;
button8.onclick = buyGunblade;
button9.onclick = buyAxe;
button10.onclick = buyESword;
button11.onclick = buySSword;


function goBase() {
  enemy.style.display = "none";
  wepShop.style.display = "none";
  text.innerText = "You are back at the starting point."
  button1.innerText = "Matrix";
  button2.innerText = "Floating Forest";
  button3.innerText = "Azure Abyss";
  button4.innerText = "Store";
  button1.onclick = goMatrix;
  button2.onclick = goForest;
  button3.onclick = goAbyss;
  button4.onclick = goStore;
};


function goMatrix() {
  enemy.style.display = "none";
  text.innerText = 'You have entered the Matrix. It is relatively dark inside. You notice streaks of neon lights flashing occasionally...';
  button1.innerText = 'Fight Firefly';
  button2.innerText = 'Fight Beambot';
  button3.innerText = 'Fight Heatray';
  button4.innerText = 'Leave Matrix';
  button1.onclick = fightFly;
  button2.onclick = fightBeam;
  button3.onclick = fightHeat;
  button4.onclick = goBase;
};


function goForest() {
  enemy.style.display = "none";
  text.innerText = 'You have entered the Floating Forest. Majestic beast sounds are prominent, yet it sounds like they are far away...';
  button1.innerText = 'Fight Snake';
  button2.innerText = 'Fight Silver Lion';
  button3.innerText = 'Fight Mammoth';
  button4.innerText = 'Leave Forest';
  button1.onclick = fightSnake;
  button2.onclick = fightSilver;
  button3.onclick = fightMammoth;
  button4.onclick = goBase;
};

function goAbyss() {
  enemy.style.display = "none";
  text.innerText = 'You have entered the Azure Abyss. You see nothing but shades of blue everywhere. It is eeriely quite...';
  button1.innerText = 'Fight Stealth Whale';
  button2.innerText = 'Fight Electric Mass';
  button3.innerText = 'Fight King Shadow';
  button4.innerText = 'Leave Abyss';
  button1.onclick = fightWhale;
  button2.onclick = fightMass;
  button3.onclick = fightShadow;
  button4.onclick = goBase;
};

function goStore() {
  text.innerText = "You have entered what appears to be a Store... ";
  button1.innerText = 'Buy Health';
  button2.innerText = 'Buy Weapons';
  button3.innerText = 'Buy Items';
  button4.innerText = 'Leave Store';
  button1.onclick = buyHealth;
  button2.onclick = buyWeapons;
  button3.onclick = buyPotion;
  button4.onclick = goBase;
};

function goInventory() {
  let inv = [];
  for (i = 0; i < inventory.length; i++){
    inv.push(inventory);
    document.getElementById('text').innerHTML = inv[i].join("<br>");
  } return inv; 

};


function buyHealth() {
  wepShop.style.display = "none";
  if (coins >= 10 && confirm("Are you sure you want to buy 10 Health Points?")) {
     coins -= 10;
     health += 10;
     coinsText.innerText = coins;
     healthText.innerText = health;
      if (coins < 10) {
        text.innerText = "You do not have enough coins to purchase health"
      }
  } else {
    return false;
  }
};


function buyWeapons() {
  wepShop.style.display = "block";
    if (level < weapons[newWep].level) {
    text.innerText = "You must be level " + weapons[newWep].level + " to purchase weapons[newWep].name"; 
  };
    if (coins < weapons[newWep].cost) {
    text.innerText = "You do not have enough coins to purchase " + weapons[newWep].name + ""
  };
    
    if (level >= weapons[newWep].level && coins >= weapons[newWep].cost && confirm("Are you sure you want to buy a " + weapons[newWep].name + " for " + weapons[newWep].cost +  " coins?")) {
      coins -= weapons[newWep].cost;
      coinsText.innerText = coins;
      
    } else {
      preventDefault(); //fixed code executing as true despite selecting 'cancel
    };
      inventory.push(weapons[newWep].name);
      weaponText.innerText = weapons[newWep].name;
      
};

function deactivate(button) {
  button.disabled = "true";
}

button0.disabled = "true";

function buyDagger() {
  newWep = 1;
  equippedWeapon = 1;
  buyWeapons();
  deactivate(button7);
  
};

function buyGunblade() {
  newWep = 2;
  equippedWeapon = 2;
  buyWeapons();
  deactivate(button8);
  
};

function buyAxe() {
  newWep = 3;
  equippedWeapon = 3;
  buyWeapons();
  deactivate(button9);
  
};

function buyESword() {
  newWep = 4;
  equippedWeapon = 4;
  buyWeapons();
  deactivate(button10)
  
};

function buySSword() {
  newWep = 5;
  equippedWeapon = 5;
  buyWeapons();
  deactivate(button11);
 
};

function buyPotion() {

};

function goFight() {
  enemy.style.display = "block";
  enemyNameValue.innerText = enemies[battle].name;
  enemyHealthValue.innerText = enemies[battle].health;
  enemyLevelValue.innerText = enemies[battle].level;
  text.innerText = "You are fighting " + enemies[battle].name + "";
  button1.innerText = 'Attack';
  button2.innerText = 'Block';
  button3.innerText = 'Heal';
  button4.innerText = 'Run';
  button1.onclick = attack;
  button2.onclick = block;
  button3.onclick = heal;
  button4.onclick = run;

};

function fightFly() {
  battle = 0;
  goFight()
  };
  
  
  const fightBeam = () => {
  battle = 1;
  goFight();
  };
  
  const fightHeat = () => {
  battle = 2;
  goFight();
  };
  
  function fightSnake() {
  battle = 3;
  goFight();
  };
  
  const fightSilver = () => {
  battle = 4;
  goFight();
  };
  
  const fightMammoth = () => {
  battle = 5;
  goFight();
  };
  
  const fightWhale = () => {
  battle = 6;
  goFight();
  };
  
  const fightMass = () => {
  battle = 7;
  goFight();
  };
  
  const fightShadow = () => {
  battle = 8;
  goFight();
  };


function attack() {
text.innerText = "The " + enemies[battle].name + " attacks you.";
text.innerText += " You attack " + enemies[battle].name + " with your " + weapons[equippedWeapon].name + ". ";

playerDamaged();
enemyDamaged();

};

function block() {
text.innerText = "You block"
};

function heal() {
text.innerText = "You heal"
};

function run() {
goBase();
};

function playerDamaged(){
  health -= enemies[battle].power
  healthValue.innerText = health;

  if (health <= 0){
    text.innerText = "You have died";
  }
};

function enemyDamaged() {
  enemyHealthValue.innerText -= weapons[equippedWeapon].power;

  if (enemyHealthValue.innerText <= 0) {
    text.innerText = "You have defeated " + enemies[battle].name + " "; 
  }
};

