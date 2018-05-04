isTruthy(0);//?
isTruthy(NaN);//?
isTruthy(undefined);//?
isTruthy(null);//?
isTruthy(false);//?
isTruthy('');//?
isTruthy(-1);//?
isTruthy(1);//?
isTruthy(true);//?
isTruthy('false');//?
isTruthy([]);//?
isTruthy({});//?

function isTruthy(value) {
    return Boolean(value);
}

let x;

const str = 'I am the doctor';

const match = str.match(/doctor/);

// x = 5;

match;

if (match) {
    console.log('TRUE!!!');
}
else {
    console.log('FALSE!!!');
}

var obj1 = {};
var obj2 = obj1;

obj1.foo = 'bar';
obj1;
obj2;

obj1 == obj2;//?