var array = [
    'all the things!!!!!',
    42,
];

'some string'.split('').reverse().join();//?

var arr2 = array.slice()
    .reverse();//?

arr2.splice(0);//?

arr2;//?

array.splice(2, 1, 1, 1, 5, 6, 6);//?

array;//?

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

forEach(array, (e, i, arr) => {
    
    console.log(e)
});

array.forEach(e => {
    console.log(e);
});
array.map(e => e + 1);//?
array.filter((e, i, arr) => {
    e == arr[i + 1];
});//?

array[array.length] = 'foo';
array.push('foo');

array;

array.pop();//?

array;

array.shift();//?

array.unshift(5);//?

array;

array.bar = 'true';

array;

array.length;//?

array.bar;//?

array.length--;

array;

array.length++;

array;