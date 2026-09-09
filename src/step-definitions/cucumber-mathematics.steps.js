const { Given, When, Then, Before } = require("@cucumber/cucumber");
const assert = require("node:assert/strict");
const VegetableCounter = require("../helpers/vegetable-counter");

Before(function () {
  this.counter = new VegetableCounter();
});

Given("I have {int} cucumbers", function (amount) {
  this.counter.setCucumbers(amount);
});

When("I eat {int} cucumbers", function (amount) {
  this.counter.eatCucumbers(amount);
});

Then("I should have {int} cucumbers", function (expected) {
  assert.strictEqual(this.counter.getCucumbers(), expected);
});

Given("I have {int} carrots", function (amount) {
  this.counter.setCarrots(amount);
});

When("I eat {int} carrots", function (amount) {
  this.counter.eatCarrots(amount);
});

Then("I should have {int} carrots", function (expected) {
  assert.strictEqual(this.counter.getCarrots(), expected);
});

Then("I should have {int} vegetables", function (expected) {
  assert.strictEqual(this.counter.getTotalVegetables(), expected);
});
