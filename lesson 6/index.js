const length = 10;
const width = 5;

const perimeter = (length + width)*2;

const area = length * width;
console.log( `Chu vi hcn là ${perimeter}cm.`);
console.log(`dien tich hcn la ${area}cm.`) 

const secondInput = 4567890;
const hours = (secondInput - secondInput%3600)/3600;
const minutes = ((secondInput%3600) - (secondInput%3600)%60)/60;
const seconds = secondInput - minutes*60 - hours*3600;

console. log(`giờ phút giây sau khi chuyển đổi là: ${hours}h : ${minutes}m : ${seconds}s`)

const firstNumber = 10;
const secondNumber = 8;
const thirdNumber = 6;

const compareNumber = ((firstNumber > secondNumber && firstNumber > thirdnumber) ? true : false);
console.log(`Số lớn nhất trong 3 số nhập vào và là STN: `, compareNumber);