//cau 2
for (let i = 0; i <= 100 ; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`so chia het cho 3 va 5:`,i);
    }
}

console.log(`(---------------------------------------------------------)`)
//cau 1
let total = 0
for (let i = 1; i <= 100 ; i++) {
    total = total + i;
}

console.log("tong cua 100 so la : ", total)

console.log(`(---------------------------------------------------------)`)
//cau 3
let sum = 1;
let inputuser = 5;
for(let i = 1; i <= inputuser ; i++){
    sum = sum * i

}

console.log(`tong giai thua:`,sum)

console.log(`(---------------------------------------------------------)`)
//cau 4
console.log(`bang cuu chuong 2`)

for(let i = 1; i <= 10 ;i++){
    console.log(`2 x ${i} = ${2 * i}`)
}

console.log(`bang cuu chuong 3`)

for(let i = 1; i <= 10 ;i++){
    console.log(`3 x ${i} = ${3 * i}`)
}

console.log(`bang cuu chuong 4`)

for(let i = 1; i <= 10 ;i++){
    console.log(`4 x ${i} = ${4 * i}`)
}

console.log(`bang cuu chuong 5`)

for(let i = 1; i <= 10 ;i++){
    console.log(`5 x ${i} = ${5 * i}`)
}

console.log(`bang cuu chuong 6`)

for(let i = 1; i <= 10 ;i++){
    console.log(`6 x ${i} = ${6 * i}`)
}

console.log(`bang cuu chuong 7`)

for(let i = 1; i <= 10 ;i++){
    console.log(`7 x ${i} = ${7 * i}`)
}

console.log(`bang cuu chuong 8`)

for(let i = 1; i <= 10 ;i++){
    console.log(`8 x ${i} = ${8 * i}`)
}

console.log(`bang cuu chuong 9`)

for(let i = 1; i <= 10 ;i++){
    console.log(`9 x ${i} = ${9 * i}`)
}

console.log(`(---------------------------------------------------------)`)
//cau 5
function decimaltobinary(inputnumber){
    let binary = "";
    for(;inputnumber > 0 ; inputnumber >>= 1){
        console.log((inputnumber & 1),binary)
        binary = ((inputnumber & 1) + binary)
    }
    return binary || "0";
}

decimaltobinary(35);