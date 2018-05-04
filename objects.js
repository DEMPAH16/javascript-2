var obj = {
    label: 'bucket',
    key: 'value',
    property: 11,
    method: function() {
        
    },
    otherMethod() {
        
    },
    lastMethod: () => {},
};

const duck = {
    height: 1.5,
    color: 'brown',
    sound: 'quack',
    canSwim: true,
    location: 'gas station',
    health: 0, // :'(
    swim() {
        
    },
    fly() {
        
    },
    speak() {
        
    },
    eat() {
        duck.health = 100;//?
    },
    sleep() {
        
    },
};

duck.health;//?
duck.eat();
duck['health'];//?
duck.masticate = duck.eat;

for (var key in duck) {
    console.log(key);
    
    typeof duck[key];//?
    
    if (typeof duck[key] == 'number') {
        duck[key] -= 5;//?
    }
    else if (typeof duck[key] == 'string') {
        duck[key] += '!';//?
    }
    else if (typeof duck[key] == 'boolean') {
        // if (duck[key]) {
        //     duck[key] = false;
        // }
        // else {
        //     duck[key] = true;
        // }
        duck[key] = !duck[key];
    }
    else if (typeof duck[key] == 'function') {
        duck[key]();
    }
}

for (var value of Object.values(duck)) {
    console.log(value);
}

Object.keys(duck);//?

delete duck.fly;

typeof [];//?

// null - 'll';//?

duck;//?



Math.PI//?
Math.floor(3.5)//?
Math.ceil(3.1)//?
Math.round(3.5);//?
Math.round(3.1);//?
Math.max(2, 5, 7, 4, 9, 0);//?
Math.min(2, 5, 7, 4, 9, 0);//?

+Math.PI.toFixed(2) + 4;//?

Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?
Math.random()//?