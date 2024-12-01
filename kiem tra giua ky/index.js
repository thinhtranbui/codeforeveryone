let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const insertValue = "MindX";
const insertIndex = 3;
for (let i = names.length - 1; i >= insertIndex; i--) {
    console.log(names[i]);
    // dịch chuyển giá trị hiện tại lên vị trí + 1 đơn vị
    names[i + 1] = names[i];
}
names[insertIndex] = insertValue;
console.log(names);