const OrderService = require("../src/orderService");
const { describe, it } = require("mocha");
const { assert } = require("chai");

class MockDatabase {
  async getItems(orderId) {
    return [
      {
        price: 10,
        quantity: 2,
      },
      {
        price: 20,
        quantity: 3,
      },
    ];
  }
}

describe("[Unit] OrderService.js", () => {
  it("[CT-Unit-0001] - Should validate the add of 3 + 5", async () => {
    const mockDatabase = new MockDatabase();
    const service = new OrderService(mockDatabase);
    const result = await service.calculateTotal(1); // Pedido Id=1
    assert.equal(
      result,
      80,
      "the result is different from what was expected"
    ); /** (10*2 + 20*3) = 80 */
  });
});
