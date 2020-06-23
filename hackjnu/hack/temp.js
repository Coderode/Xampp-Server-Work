//Simple funtion

const add = (a, b) => {
  return a + b;
};

//Class

class Totest {
  //function 1
  printName(data) {
    const text = data + " was the text to return";
    return text;
  }

  //function 2
  printSurname(data) {
    return data + " Sharma";
  }
}

//object
totest = new Totest();

console.log(totest.printName("Tarun"));

//JSON

const objectText = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" }
  ]
};

console.log(
  "The first name of second employee is " +
    objectText.employees[1].firstName +
    " & last name is " +
    objectText.employees[1].lastName
);
