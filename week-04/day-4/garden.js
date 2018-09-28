class garden {
  constructor(color, Water) {
    this.color = color;
    this.Water = Water;
    this.waterForEach = 0;
    this.absorbedWater = 0;
    this.flowers = [];
    this.trees = [];
  }

  addflower(flower) {
    this.flowers.push(flower);
  }

  addtree(tree) {
    this.trees.push(tree);
  }

  watering() {
    if (this.water > 0) {
      console.log(`Watering with ${this.water}`);
      this.waterForEach = this.water / (this.flowers.length + this.trees.length);
      this.flowers.forEach((e) => {
        e.absorbedWater += this.waterForEach * 0.75;
      });
      this.trees.forEach((b) => {
        b.absorbedWater += this.waterForEach * 0.4;
      });
    }
  }
}

class Flower extends garden {
  constructor(color, currentWater, waterForEach, absorb) {
    super(color, currentWater, waterForEach);
    this.absorb = absorb;
  }

  addFlower() {
    this.flowers.push();
    if (this.currentWater < 5) {
      console.log(`The ${this.color} Flower needs water`);
    } else {
      console.log(`The ${this.color} Flower doesnt needs water`);
    }
  }

}


const yellow = new Flower('yellow', 0);
const blue = new Flower('blue', 0);
const purple = new Trees('purple', 0);
const orange = new Trees('orange', 0);

const gard0 = new Garden(0);
gard0.addflow(yellow);
gard0.addflow(blue);
gard0.addtree(purple);
gard0.addtree(orange);
gard0.watering();
gard0.printfat();

const gard1 = new Garden(40);
gard1.addflow(yellow);
gard1.addflow(blue);
gard1.addtree(purple);
gard1.addtree(orange);
gard1.watering();
gard1.printfat();

const gard2 = new Garden(70);
gard2.addflow(yellow);
gard2.addflow(blue);
gard2.addtree(purple);
gard2.addtree(orange);
gard2.watering();
gard2.printfat();
