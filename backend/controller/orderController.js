const OrderItem = require('../models/orderItem');
const Product = require('../models/product');
const User = require('../models/user');
const { Op } = require('sequelize');

const orderController = {
  getOrders: async (req, res) => {
    try {
      const { userId, productId, done } = req.query;
      const where = {};

      if (userId) where.userId = userId;
      if (productId) where.productId = productId;
      if (done !== undefined) where.done = done;

      const orders = await OrderItem.findAll({
        where,
        include: [
          {
            model: Product,
            as: 'product',
            attributes: ['id', 'name', 'price']
          },
          {
            model: User,
            as: 'user',
            attributes: ['id', 'username', 'phone']
          }
        ]
      });

      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateOrderStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { done } = req.body;

      const orderItem = await OrderItem.findByPk(id);
      if (!orderItem) {
        return res.status(404).json({ message: "Order not found" });
      }

      orderItem.done = done;
      await orderItem.save();

      res.status(200).json(orderItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = orderController;
