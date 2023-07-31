class MotherAnimal {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  set age(val) {
    if (val > 0) {
      this._age = val;
    }
  }

  get age() {
    return this._age;
  }
}

class Zebra extends MotherAnimal {
  type = "zebra";

  zebraInfo() {
    console.log(
      `Hello , I'm ${this.name} and I'm ${this.age} years old . I am a ${this.type} .`
    );
  }
}

const firstZebra = new Zebra("Petko", 10);

firstZebra.zebraInfo();

class Dolphin extends MotherAnimal {
  type = "doplhin";

  dolphinInfo() {
    console.log(
      `Hello , I'm ${this.name} and I'm ${this.age} years old . I am a ${this.type} .`
    );
  }
}

const firstDolph = new Dolphin("Ian", 5);

firstDolph.dolphinInfo();
