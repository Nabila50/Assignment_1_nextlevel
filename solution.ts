 

const formatValue = (
  value: string | number | boolean): string | number | boolean => {

  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  }
   else {
    return !value;
  }
};


// ! -------------------------------- Problem 2 --------------------------------------------

const getLength = (input: string | any []): number => {
  if(typeof input === 'string') {
    return input.length;
  }

  if(Array.isArray(input)){
    return input.length;
  }

  return 0;
}
 console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
// ! -------------------------------- Problem 3 --------------------------------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);


// !-------------------------------- Problem 4 --------------------------------------------

type Item = {
  title: string;
  rating: number
};

const filterByRating = (items: Item[]): Item[]=>{
  return items.filter(item => item.rating >= 4);

}

// Input
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 2.2 },
  { title: 'Book C', rating: 5.0 },
];

// ! -------------------------------- Problem 5 --------------------------------------------

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers =(users: User[]): User[] =>{
  return users.filter(user => user.isActive === true);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


// ! -------------------------------- Problem 6 --------------------------------------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book:Book): void =>{
  const bookAvailable = book.isAvailable ? "Yes" : "No";

  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${bookAvailable}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// ! -------------------------------- Problem 7 --------------------------------------------

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[]=>{
  const result : (string | number)[] =[];
 
  for(const value of arr1){
    let valueExists = false;
    for(const item of result) {
      if(item === value){
        valueExists = true;
        break;
      }
    }
    if(!valueExists){
      result.push(value);
    }
  }


    for(const value of arr2){
    let valueExists = false;
    for(const item of result) {
      if(item === value){
        valueExists = true;
        break;
      }
    }
    if(!valueExists){
      result.push(value);
    }
  }

  return result;
  
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

 
 // ! -------------------------------- Problem 8 --------------------------------------------

 interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
 }

 const calculateTotalPrice = (products: Product[]): number =>{
   
  if(products.length === 0)
    return 0;
  
  return products.map(product =>{
    const originalPrice = product.price * product.quantity;
    const discountPrice = product.discount ? (originalPrice * product.discount)/100 : 0;

    return originalPrice - discountPrice;
  })

  .reduce((totalPrice, value) => totalPrice + value, 0);
 
 };
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
 