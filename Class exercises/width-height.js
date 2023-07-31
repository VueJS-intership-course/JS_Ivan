class Main {
  constructor(width = 5, height = 5) {
    this.width = width;
    this.height = height;
  }
}

class Triangle extends Main {
  calcTri() {
    console.log(this.width + this.height);
  }
}

class Square extends Main {
  calcSquare() {
    console.log(this.width * this.height);
  }
}

const square = new Square(5, 5);

square.calcSquare();
