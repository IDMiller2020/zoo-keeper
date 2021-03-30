import Alligator from "./models/Alligator.js";
import Baboon from "./models/Baboon.js"
import Camel from "./models/Camel.js"
import Dolphin from "./models/Dolphin.js"
import Elephant from "./models/Elephant.js"
import Fox from "./models/Fox.js"
import Gorilla from "./models/Gorilla.js"
import Hawk from "./models/Hawk.js"
import Impala from "./models/Impala.js"
import Jaguar from "./models/Jaguar.js"
import Kangaroo from "./models/Kangaroo.js"
import Lion from "./models/Lion.js"
import Monkey from "./models/Monkey.js"
import Newt from "./models/Newt.js"
import Ostrich from "./models/Ostrich.js"
import Panda from "./models/Panda.js"
import Quail from "./models/Quail.js"
import Rabbit from "./models/Rabbit.js"
import Snake from "./models/Snake.js"
import Tiger from "./models/Tiger.js"
import Unicorn from "./models/Unicorn.js"
import Vulture from "./models/Vulture.js"
import Walrus from "./models/Walrus.js"
import XRayTetra from "./models/XRayTetra.js"
import Yak from "./models/Yak.js"
import Zebra from "./models/Zebra.js"

let allAnimals = [
  new Alligator("Ally", "Green", "F", 200, 60, false, true),
  new Baboon("Boonie", "Black", "M", 50, 0, true, true),
  new Camel("Cam", "Tan", "M", 500, 48, true, false),
  new Dolphin("Dol", "Grey", "F", 800, 12, true, true),
  new Elephant("Ele", "Grey", "F", 2000, 36, true, false),
  new Fox("Fox", "Red", "M", 20, 18, true, true),
  new Gorilla("Gor", "Black", "M", 600, 0, true, true),
  new Hawk("Hawkeye", "Brown", "F", 5, 4, false, true),
  new Impala("Imp", "Tan", "M", 150, 2, true, false),
  new Jaguar("Jag", "Tan with Black Spots", "F", 30, 36, false, true),
  new Kangaroo("Kang", "Brown", "F", 180, 48, true, false),
  new Lion("King", "Tan", "M", 400, 36, true, true),
  new Monkey("Monk", "Black", "F", 15, 48, true, true),
  new Newt("Sam", "Green", "M", 1, 2, true, false),
  new Ostrich("Rich", "Grey", "F", 60, 24, true, false),
  new Panda("Pan", "Black and White", "M", 100, 1, true, true),
  new Quail("Q", "Brown", "F", 2, 3, true, false),
  new Rabbit("Peter", "White", "M", 5, 1, true, false),
  new Snake("Jake", "Orange", "M", 3, 12, true, true),
  new Tiger("Tony", "Orange and Black", "M", 300, 48, false, true),
  new Unicorn("Unice", "Gold", "F", 700, 36, true, false),
  new Vulture("Victor", "Brown", "F", 20, 8, false, true),
  new Walrus("Wally", "Brown", "M", 1000, 0, false, true),
  new XRayTetra("Tim", "Neon Red and Blue", "F", 1, 1, true, true),
  new Yak("Rob", "Brown", "M", 1100, 24, true, false),
  new Zebra("Zeb", "Black and White", "M", 700, 24, true, false)
]
console.log(allAnimals);

//The lines below print out 0 through 25 (array indexes)
const iterator = allAnimals.keys()
for (const key of iterator) {
  console.log(key)
}
let alligator = allAnimals.filter(animal => animal.herbivore == true)
console.log(alligator);

//let ally = new Alligator("Ally", "Green", "F", 200, 60, false, true);

//This line throws a TypeError
//console.log(`Alligator is at index ${allAnimals.findIndex('Alligator')} in the allAnimals array`);

console.log(`The Alligators name is ${allAnimals[0].name}`);
// console.log(`Ally is a carnivore? - ${ally.carnivore}`)
// console.log(ally.eat('steak'))


//let boonie = new Baboon("Boonie", "Black", "M", 50, 0, true, true)

console.log(`The Baboons name is ${allAnimals[1].name}`);
// console.log(`Boonie is a carnivore? - ${boonie.carnivore}`)
// console.log(ally.eat('steak'))


//let cam = new Camel("Cam", "Tan", "M", 500, 48, true, false)

console.log(`The Camels name is ${Camel.name}`);
// console.log(`Cam is a carnivore? - ${cam.carnivore}`)
// console.log(cam.eat('oats'))

//let dol = new Dolphin("Dol", "Grey", "F", 800, 12, true, true)

console.log(`The Dolphins name is ${Dolphin.name}`)

//let ele = new Elephant("Ele", "Grey", "F", 2000, 36, true, false)

console.log(`The Elephants name is ${Elephant.name}`)

//let fox = new Fox("Fox", "Red", "M", 20, 18, true, true)

console.log(`The Foxs name is ${Fox.name}`)

//let gor = new Gorilla("Gor", "Black", "M", 600, 0, true, true)

console.log(`The Gorillas name is ${Gorilla.name}`)

//let hawkeye = new Hawk("Hawkeye", "Brown", "F", 5, 4, false, true)

console.log(`The Hawks name is ${Hawk.name}`)

//let imp = new Impala("Imp", "Tan", "M", 150, 2, true, false)

console.log(`The Impalas name is ${Impala.name}`);

//let jag = new Jaguar("Jag", "Tan with Black Spots", "F", 30, 36, false, true)

console.log(`The Jaguars name is ${Jaguar.name}`);

//let kang = new Kangaroo("Kang", "Brown", "F", 180, 48, true, false)

console.log(`The Kangaroos name is ${Kangaroo.name}`);

//let king = new Lion("King", "Tan", "M", 400, 36, true, true)

console.log(`The Lions name is ${Lion.name}`);

//let monk = new Monkey("Monk", "Black", "F", 15, 48, true, true)

console.log(`The Monkeys name is ${Monkey.name}`);

//let sam = new Newt("Sam", "Green", "M", 1, 2, true, false)

console.log(`The Newts name is ${Newt.name}`);

//let rich = new Ostrich("Rich", "Grey", "F", 60, 24, true, false)

console.log(`The Ostrichs name is ${Ostrich.name}`);

//let pan = new Panda("Pan", "Black and White", "M", 100, 1, true, true)

console.log(`The Pandas name is ${Panda.name}`);

//let q = new Quail("Q", "Brown", "F", 2, 3, true, false)

console.log(`The Quails name is ${Quail.name}`);

//let peter = new Rabbit("Peter", "White", "M", 5, 1, true, false)

console.log(`The Rabbits name is ${Rabbit.name}`);

//let jake = new Snake("Jake", "Orange", "M", 3, 12, true, true)

console.log(`The Snakes name is ${Snake.name}`);

//let tony = new Tiger("Tony", "Orange and Black", "M", 300, 48, false, true)

console.log(`The Tigers name is ${Tiger.name}`);

//let unice = new Unicorn("Unice", "Gold", "F", 700, 36, true, false)

console.log(`The Univorns name is ${Unicorn.name}`);

//let victor = new Vulture("Victor", "Brown", "F", 20, 8, false, true)

console.log(`The Vultures name is ${Vulture.name}`);

//let wally = new Walrus("Wally", "Brown", "M", 1000, 0, false, true)

console.log(`The Walrus name is ${Walrus.name}`);

//let tim = new XRayTetra("Tim", "Neon Red and Blue", "F", 1, 1, true, true)

console.log(`The XRayTetras name is ${XRayTetra.name}`);

//let rob = new Yak("Rob", "Brown", "M", 1100, 24, true, false)

console.log(`The Yaks name is ${Yak.name}`);

//let zeb = new Zebra("Zeb", "Black and White", "M", 700, 24, true, false)

console.log(`The Zebras name is ${Zebra.name}`);