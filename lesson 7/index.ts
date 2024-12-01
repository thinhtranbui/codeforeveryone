interface Person {
    name: string;
    age: number;
    job: string;
  }
  // khai báo bắt buộc phải đầy đủ các key đã định nghĩa như interface Person
  const person: Person = {
    name: "John",
    age: 30,
    job: "Developer"
  };
  
  // trường hợp truy xuất một thuộc tính nào đó mà không được tính nghĩa từ interface sẽ bị lỗi