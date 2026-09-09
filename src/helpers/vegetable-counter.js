class VegetableCounter {
  constructor() {
    this.cucumbers = 0;
    this.carrots = 0;
  }

  setCucumbers(amount) {
    this.cucumbers = amount;
  }

  setCarrots(amount) {
    this.carrots = amount;
  }

  eatCucumbers(amount) {
    this.cucumbers -= amount;
  }

  eatCarrots(amount) {
    this.carrots -= amount;
  }

  getCucumbers() {
    return this.cucumbers;
  }

  getCarrots() {
    return this.carrots;
  }

  getTotalVegetables() {
    return this.cucumbers + this.carrots;
  }
}

module.exports = VegetableCounter;
