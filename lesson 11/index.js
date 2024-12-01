console.log(`-----------------------cau 1---------------------`)
let names = ["Alice", "John"];
names.push('Tom');
console.log(names); 

console.log(`-----------------------cau 2---------------------`)
let arr = [1, 2, 3, 4];
let newArr = arr.map((item)=>{
    return item * item;
});
console.log(newArr);

console.log(`-----------------------cau 3---------------------`)
let numbers = [5, 10, 15, 20, 25];
let evenNumbers = numbers.filter((item) => {
  return item % 10 === 0;
});

console.log(evenNumbers); 

console.log(`-----------------------cau 4---------------------`)
let numberss =[{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
let found = numberss.find(element => element.score > 8);

console.log(found);

console.log(`-----------------------cau 5---------------------`)
const number = [3, 5, 8, 12, 15];
const index = number.findIndex(element => element > 10);

console.log(index);

console.log(`-----------------------cau 6---------------------`)
const numbe = ['a', 'b', 'c', 'd', 'e'];
numbe.splice(3, 0, `f` );
numbe.splice(4, 1);

console.log(numbe); 

console.log(`-----------------------cau 7---------------------`)
const obj = { name: 'Tom', age: 21, major: 'Computer Science' };

console.log(Object.keys(obj));

console.log(`-----------------------cau 8---------------------`)
const obje = { name: 'Tom', age: 21, major: 'Computer Science' };

console.log(Object.values(obje)); 

console.log(`-----------------------cau 9---------------------`)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);

console.log(`-----------------------cau 10---------------------`)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];  

console.log(arr2);

console.log(`-----------------------cau 11---------------------`)
const obj12 = { name: 'Alice', age: 25 };
const obj23 = { job: 'Developer' };
const obj34 = { ...obj12, ...obj23 }; 

console.log(obj34); 

console.log(`-----------------------cau 12---------------------`)
const namess = ['john', 'alice', 'tom', ];
const newnames = namess.map(element => element.toUpperCase());
console.log(newnames);

console.log(`-----------------------cau 13---------------------`)
let numberrs = [1, 2, 3, 4, 5, 6];
let evenNumberrs = numberrs.filter(item => item % 2 === 0).reduce((tong,item) => tong + item, 0);

console.log(evenNumberrs);

console.log(`-----------------------cau 14---------------------`)
let numberrss = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [... new Set(numberrss)];

console.log(uniqueNumbers);

console.log(`-----------------------cau 15---------------------`)
let array = ['a', 'b', 'a', 'c', 'b', 'a'];
let countindex = array.reduce((res, item) => {
    res[item] = (res[item] || 0) + 1
    return res
}, {});

console.log(countindex);
