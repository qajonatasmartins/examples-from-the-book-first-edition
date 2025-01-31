class OrderService {
  constructor(database) {
    this.database = database;
  }

  async calculateTotal(orderId) {
    const items = await this.database.getItems(orderId);
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

module.exports = OrderService;
