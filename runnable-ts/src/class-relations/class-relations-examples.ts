// Inheritance

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

// Association
//classes uses each other or one reference another

class Driver {
  constructor(public name: string) {}
}

class Car {
  constructor(public model: string, public driver: Driver) {}
}

const driver = new Driver('John Doe');
const car = new Car('Toyota', driver);

// Aggregation
// A class contains a reference to another class, but the contained class can exist independently.

class Employee {
  constructor(public name: string) {}
}

class Department {
  private employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }
}

const emp1 = new Employee('Alice');
const emp2 = new Employee('Bob');
const department = new Department();
department.addEmployee(emp1);
department.addEmployee(emp2);

// composition
// A class contains another class, and the contained class cannot exist independently.

class Engine {
  start() {
    console.log('Engine started');
  }
}

class Vehicle {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  startVehicle() {
    this.engine.start();
  }
}

const vehicle = new Vehicle();
vehicle.startVehicle();

// Dependency
// A class temporarily uses another via method parameter or local variable.

class Logger {
  log(message: string) {
    console.log('Log:', message);
  }
}

class Application {
  bootstrap(name: string, logger: Logger) {
    logger.log(`Application ${name} is starting...`);
  }
}

const app = new Application();
const logger = new Logger();
app.bootstrap('MyApp', logger);
