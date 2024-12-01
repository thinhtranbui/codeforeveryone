//cau 1
const length = 10;
const width = 5;
//chu vi hcn
const perimeter = (length + width)*2;
//dien tich hcn
const area = length * width;
console.log( `Chu vi hcn là ${perimeter}cm.`);
console.log(`dien tich hcn la ${area}cm.`) 
//cau 2
const secondInput = 4567890;
const hours = (secondInput - secondInput%3600)/3600;
const minutes = ((secondInput%3600) - (secondInput%3600)%60)/60;
const seconds = secondInput - minutes*60 - hours*3600;

console. log(`giờ phút giây sau khi chuyển đổi là: ${hours}h : ${minutes}m : ${seconds}s`)
//cau 6
const firstNumber = 10;
const secondNumber = 8;
const thirdNumber = 6;

const compareNumber = ((firstNumber > secondNumber && firstNumber > thirdNumber) ? true : false);
console.log(`Số lớn nhất trong 3 số nhập vào và là STN: `, compareNumber);

const luyThua = 2;
const coSo = 5;
//cau 3
const math = (coSo ** luyThua)
console.log(`lũy thừa của một số nhập từ người dùng ${math}.`);
//cau 4
function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
  }
  let firstNum = 15;
let secondNum = 10;
let thirdNum = 20;

console.log(`Giá trị trung bình của 3 số là ${(firstNum+secondNum+thirdNum)/3}`)

//cau 5
let x1 = 5;
let y1 = 4;
let x2 = 3;
let y2 = 2;

console.log(`Khoảng cách của (4,5) và (3,2) trong không gian là ${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}`)

//cau 7
let string1 = "toi la ai";
let string2 = "toi la ai";

console.log(string1===string2);
//cau 8
 let input = 7;
console.log(`${input} ${input>0}`);
//cau 9
let year = 2040;
console.log(year ,year%400==0 || (year%4==0 && !(year%100==0)));
//cau 10 
let h1 = 23;
let m1 = 30;
let h2 = 19;
let m2 = 50;

console.log( (h1>h2) ? true : (h1==h2 && m1>m2) ? true : false);