//----------------------- Link bài tập thực hành ----------------------- 
// https://docs.google.com/document/d/1vzazZrONBRMc630P3kUdc9l5T3JmxqfXWxAFsOgcgnU/edit?tab=t.0
//---------------------------------------------------------------------- 

console.log('------ Câu 1 ------');

function phuongtrinh(A, B, x) {
    return A * x + B
}
let A = 3;
let B = 4
let x = 5;
let ketqua = phuongtrinh(3, 4, 5);
// console.log("f(5) = ", phuongtrinh(3, 4, 5)); //Cách 1
console.log("f(5) = ", ketqua); //Cách 1
console.log('-------------------');

console.log('------ Câu 3 ------');

function dienTichHinhTron(r) {
    let area = Math.PI * r * r;
    return area.toFixed(2);
}

let r = 5;
let area = dienTichHinhTron(r);
console.log("Area: " + area);
console.log('-------------------');

console.log('------ Câu 4 ------');

function isPrime(n) {
    if (n <= 1) return false; //Các số nhỏ hơn hoặc bằng 1 thì không phải là số NT
    for (let i = 2; i <= Math.sqrt(n); i++) { //Kiểm tra từ 2 đến căn bậc 2 của n
        if (n % i === 0) {
            return false; //Nếu n chia hết cho i, n không phải là số nguyên tố
        }
    }
    return true;
}
let n = 5;
let ketqua_4 = isPrime(n);
console.log(ketqua_4);
console.log('-------------------');


console.log('------ Câu 5 ------');

// function sum(...args) {
//     let total = 0
//     for (let i = 0; i < args.length; i++) {
//         total += args[i] => total = total + args[i]
//     }
//     return total;
// }    //Cách 1

function sum(...args) {
    return args.reduce((a, b) => a + b, 0); //Cách 2
}

console.log(sum(1, 2, 3, 4, 5));
console.log('-------------------');

console.log('------ Câu 5 ------');

// function sum(start, end) {
//     let total = 0
//     for (let i = start; i <= end; i++) {
//         total += i
//     }
//     return total;
// } //Cách 1

function sum(start, end) {
    let numbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    // => [5,6,7,8,9,10]
    return numbers.reduce((a, b) => a + b, 0); //Cách 2
}

let start = 5;
let end = 10;
let ketqua_5 = sum(start, end);

console.log(ketqua_5);
console.log('-------------------');

console.log('------ Câu 7 ------');

function checkStr(str) {
    // let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    let cleanedStr = str.toLowerCase(); //lấy "madam" từ (1)
    let resultStr = cleanedStr.split('').reverse().join(''); //Kết quả trả về là MAdam
    return cleanedStr === resultStr;
}

let strs = "madAM"; //(1)
let ketqua_7 = checkStr(strs)

console.log(ketqua_7);
console.log('-------------------');





//Câu 8 --> Kiểm tra số đó có chia hết cho 2 hay không (n % 2 ===0)

//Câu 9 --> arrays.filter(x => x.num > 0).reduce(function))

//Câu 10 --> Math.max(array)

//Câu 11 --> arrays.sort((a,b) => a-b)

//Câu 12
//B1: Loại bỏ các phần từ trùng nhau --> Set(array)
//B2: Kiểm tra điều kiện k <= số lượng phần từ khi loại bỏ trùng --> if(k > array.length, return null)
//B3: Sắp xếp mảng theo chiều giảm dầm và lấy phần tử thứ k-1 --> sort((a,b) => b - a), return array[k-1]

//Câu 13
//B1: Tạo 1 đối tượng (object) để đếm số lần xuất hiện của mỗi số --> Duyệt qua mảng ban đầu để lưu số lần xuất hiện của từng số vào đối tượng "tansuat" (sử dụng foreach)
//B2: Tìm số lần xuất hiện lớn nhất (maxCount) --> Duyệt qua tất cả các giá trị (tần suất) trong "tansuat" để tìm giá trị lớn nhất (sử sụng for duyệt Object.values(tansuat), so sánh if)
//B3: Tìm tất cả các số có số lần xuất hiện bằng maxCount --> Duyệt qua các số trong "tansuat" và thêm số nào có tần suất bằng maxCount vào mảng maxNumbers (sử dụng for duyệt tansuat, so sánh if và sử dụng hàm array.push để thêm)
//B4: Trả về số lớn nhất trong mảng maxNumbers --> sử dụng Math.max

//Câu 14
//Sử dụng hàm split dựa trên khoảng trắng

//Câu 15
//B1: Duyệt qua các khóa trong đối tượng --> sử dụng for để duyệt qua từng khóa
//B2: Kiểm tra kiểu dữ liệu --> dùng typeof obj[Key] ==== 'number' để kiểm tra xem giá trị tại khóa đó có phải là số hay không
//B3: Cộng dồn vào biến tổng --> Nếu là số, cộng giá trị đó vào biến tổng
//B4: Trả về tổng --> Sau khi duyệt hết các khóa, return tổng