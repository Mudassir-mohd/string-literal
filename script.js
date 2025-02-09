let numbers = [1, 2, 3, 4, 5];
let  squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); 



// 2nd question
let names = ["alice", "bob", "charlie"];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);



// 3rd question
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
  ];
  
  let expensiveProducts = products
    .filter(product => product.price > 500) 
    .map(product => product.price);
  console.log(expensiveProducts);


// 4h question
let purchases = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
    { price: 8, quantity: 1 }
  ]; 
  let totalCost = purchases.reduce((total, purchase) => total + (purchase.price * purchase.quantity), 0);
  
  console.log(totalCost);
  // Output: 48
  
  


