import Alligator from "./models/Alligator.js";

let ally = new Alligator("Ally", "Green", "F", 200, 60, false, true);

// Test Alligator instantiation
// console.log(ally);
// console.log(`Ally is a carnivore? - ${ally.carnivore}`)
// console.log(ally.eat('steak'))

import Baboon from "./models/Baboon.js"

let boonie = new Baboon("Boonie", "Black", "M", 50, 0, true, true)

// Test Baboon instantiation
// console.log(boonie);
// console.log(`Boonie is a carnivore? - ${boonie.carnivore}`)
// console.log(ally.eat('steak'))

import Camel from "./models/Camel.js"

let cam = new Camel("Cam", "Tan", "M", 500, 48, true, false)

// Test Camel instantiation
// console.log(cam);
// console.log(`Cam is a carnivore? - ${cam.carnivore}`)
// console.log(cam.eat('oats'))