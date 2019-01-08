const heavyDo = times => {
    let count = 0;
    for (let i = 0; i < times; i++) {
        if (Math.round(Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))) === 1) {
            count++;
        }
    }
    return count;
};

let counts = 0;
let pile = [];
let callback;
const add = function (task) {
    pile.push(task);
};

const next = function () {
    const task = pile.shift();
    if (!task) return;

    setImmediate(() => {
        counts = counts + task();
        pile.length === 0 ? callback(counts) : next();
    });
};

const faire = function (cb) {
    callback = cb;
    next();
};

let total = 1e8,
    cuts = 100;
for (let i = 0; i < cuts; i++) {
    add(() => heavyDo(total / cuts));
}

const interval = setInterval(() => console.log('I am not blocked'), 1000);
setTimeout(() => clearInterval(interval), 10000);

faire(counts => console.log(counts));
