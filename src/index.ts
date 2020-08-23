// const name = "shin",
//   age = 24,
//   gender = "male";

// const sayHi = (name: string, age: number, gender: string): string => {
//    return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };

// console.log(sayHi(name, age, gender));

// export {};

// interface Human {
//   name: string,
//   age: number,
//   gender: string
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const p1 = new Human("홍길동", 91, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(p1));

export {};
