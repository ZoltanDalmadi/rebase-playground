export class Duck {
  constructor(name) {
    this.name = name;
  }

  quack() {
    console.log(`${name} is quacking!`);
  }

  walk() {
    console.log(`${name} is walking!`);
  }

  fly() {
    console.log(`${name} is flying!`);
  }

}
