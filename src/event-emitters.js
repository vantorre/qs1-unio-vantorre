const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

let first = true;

myEmitter.on("north", () => {
        sensaSay("For the North");
        if (first) {
            first = false;
            johnSay("Winter is coming")
        }
        myEmitter.emit("arya");
    }
)
;
myEmitter.on("arya", () => aryaSay("The king in the North"));


const sensaInterval = setInterval(() => {
    myEmitter.emit("north");
}, 1000);
setTimeout(() => clearInterval(sensaInterval), 5000);
















