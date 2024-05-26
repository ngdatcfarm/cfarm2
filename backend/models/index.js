const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Product = require('./product');
const Cart = require('./cart');
const CartItem = require('./cartItem');

// Định nghĩa mối quan hệ sau khi tất cả các model đã được import
Cart.hasMany(CartItem, { foreignKey: 'cartId', as: 'cartItems' });
CartItem.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
CartItem.belongsTo(Cart, { foreignKey: 'cartId', as: 'cart' });

module.exports = {
  sequelize,
  Product,
  Cart,
  CartItem
};
