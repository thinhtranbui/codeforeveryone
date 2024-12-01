console.log('------ Câu 1 ------');
const student = { name: "John", age: 20 };
console.log('Mảng trước khi thêm: ', student);
// student.major = "Computer Science"; //Cách 1
// student["major"] = "Computer Science"; //Cách 2
Object.assign(student, { major: "Computer Science" });
console.log('Mảng sau khi thêm', student);
console.log('-------------------');

console.log('------ Câu 2 ------');
const person = { name: "Alice", age: 25, job: "Designer" };
console.log('mảng trước khi xóa', person);
delete person.age;
console.log('mảng trước khi xóa', person);
console.log('-------------------');

console.log('------ Câu 3 ------');
const car = { brand: "Toyota", model: "Camry", year: 2020, color: "red" };
const propertyCount = Object.keys(car).length;
console.log('Số lượng thuộc tính trong đối tượng: ', propertyCount);
console.log('-------------------');

console.log('------ Câu 4 ------');
const product = { name: "Laptop", price: 1000 };
console.log('mảng trước chuyển đổi', product);
const change = Object.entries(product)
console.log('mảng sau chuyển đổi', change);
console.log('-------------------');

console.log('------ Câu 5 ------');
const products = [{ name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 }];
console.log('mảng trước tìm kiếm', products);
const nameSearch = products.find(x => x.price === 500)
console.log('mảng sau tìm kiếm', nameSearch);
console.log('-------------------');

console.log('------ Câu 6 ------');
const products_6 = [{ name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 }];
console.log('mảng trước tìm kiếm', products_6);
const nameSearch_6 = products_6.filter(x => x.price > 100)
console.log('mảng sau tìm kiếm', nameSearch_6);
console.log('-------------------');

console.log('------ Câu 7 ------');
const person_7 = { name: "Bob", age: 25, job: "Developer" };
console.log('mảng trước cập nhật', person_7);
person_7.age = 30;
console.log('mảng sau cập nhật', person_7);
console.log('-------------------');

console.log('------ Câu 8 ------');
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergeObject = Object.assign({}, obj1, obj2)
console.log('mảng sau cập nhật', mergeObject);
console.log('-------------------');

console.log('------ Câu 9 ------');
const animal = { type: "Dog", name: "Buddy", age: 3 };
for (let key in animal) {
    console.log(`${key}: ${animal[key]}`);
}
console.log('-------------------');

console.log('------ Câu 10 ------');
const car_10 = { brand: "BMW", model: "X5" };
// const hasColor = "color" in car_10; //Cách 1
const hasColor = car_10.hasOwnProperty("color");
console.log(hasColor);
console.log('-------------------');