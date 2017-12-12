// create character prototype
function Character(firstName, lastName, age, gender, race, charClass, strength, intelligence, dexterity, vitality, wisdom, charisma) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.gender = gender,
  this.race = race,
  this.charClass = charClass,
  this.strength = strength,
  this.intelligence = intelligence,
  this.dexterity = dexterity,
  this.vitality = vitality,
  this.wisdom = wisdom,
  this.charisma = charisma
}

// Generate values

// First Name
var generateFirstName = function() {
  var charFirstName = document.getElementsByName('firstName')[0].value;
  console.log("First Name: " + charFirstName);
  return charFirstName;
};

// Last Name

var generateLastName = function() {
  var charLastName = document.getElementsByName('lastName')[0].value;
  console.log("Last name: " + charLastName);
  return charLastName;
};

// Age

var generateAge = function() {
  var charAge = document.getElementsByName('age')[0].value;
  console.log("Age: " + charAge);
  return charAge;
};

// Gender

var generateGender = function() {
  var radios = document.getElementsByName('gender');
  var found = 1;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log("Gender: " + radios[i].value);
      //document.getElementById("chargender").innerHTML = "Your character's gender is: " + radios[i].value;
      var charGender = radios[i].value;
      return charGender;
      found = 0;
      break;
    }
  }
  if (found == 1) {
    alert("Please select a gender");
  }
};

// Race

var generateRace = function() {
  var race = ["Human", "Orc", "Fairy", "Werewolf", "Automaton", "Dragon", "Centaur", "Merman"];
  var charRace = race[Math.floor(Math.random() * race.length)];
  console.log("Race: " + charRace);
  return charRace;
};

// Class

var generateClass = function() {
  var classes = ["Archer", "Mage", "Thief", "Warrior", "Barbarian", "Druid"];
  var charClass = classes[Math.floor(Math.random() * classes.length)];
  console.log("Class: " + charClass);
  return charClass;
};

// Strength

var generateStrength = function() {
  var strength = Math.floor((Math.random() * 100) + 1);
  console.log("Strength: " + strength);
  return strength;
};

// Intelligence

var generateIntelligence = function() {
  var intelligence = Math.floor((Math.random() * 100) + 1);
  console.log("Intelligence: " + intelligence);
  return intelligence;
};

// Dexterity

var generateDexterity = function() {
  var dexterity = Math.floor((Math.random() * 100) + 1);
  console.log("Dexterity: " + dexterity);
  return dexterity;
};

// Vitality

var generateVitality = function() {
  var vitality = Math.floor((Math.random() * 100) + 1);
  console.log("Vitality: " + vitality);
  return vitality;
};

// Wisdom

var generateWisdom = function() {
  var wisdom = Math.floor((Math.random() * 100) + 1);
  console.log("Wisdom: " + wisdom);
  return wisdom;
};

// Charisma

var generateCharisma = function() {
  var charisma = Math.floor((Math.random() * 100) + 1);
  console.log("Charisma: " + charisma);
  return charisma;
};

function rollCharacter() {
  var character = new Character(generateFirstName(), generateLastName(), generateAge(), generateGender(), generateRace(), generateClass(), generateStrength(), generateIntelligence(), generateDexterity(), generateVitality(), generateWisdom(), generateCharisma());
  document.getElementById("charfirstname").innerHTML = "First Name: " + character.firstName;
  document.getElementById("charlastname").innerHTML = "Last Name: " + character.lastName;
  document.getElementById("charage").innerHTML = "Age: " + character.age;
  document.getElementById("chargender").innerHTML = "Gender: " + character.gender;
  document.getElementById("charrace").innerHTML = "Race: " + character.race;
  document.getElementById("charclass").innerHTML = "Class: " + character.charClass;
  document.getElementById("charstrength").innerHTML = "Strength: " + character.strength;
  document.getElementById("charintelligence").innerHTML = "Intelligence: " + character.intelligence;
  document.getElementById("chardexterity").innerHTML = "Dexterity: " + character.dexterity;
  document.getElementById("charvitality").innerHTML = "Vitality: " + character.vitality;
  document.getElementById("charwisdom").innerHTML = "Wisdom: " + character.wisdom;
  document.getElementById("charcharisma").innerHTML = "Charisma: " + character.charisma;
}