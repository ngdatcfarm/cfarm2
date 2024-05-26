const CartItem = require('../models/cartItem');

const cartController = {
  placeOrder: async (req, res) => {
    try {
      const userId = req.user.id;
      const { cartItems, address, phone, timeForShip } = req.body;

      const newCartItems = await Promise.all(cartItems.map(async item => {
        return await CartItem.create({
          userId,
          productId: item.productId,
          quantity: item.quantity,
          address,
          phone,
          timeForShip,
        });
      }));

      res.status(201).json(newCartItems);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Các phương thức khác như getCartItems, updateCartItem, deleteCartItem...
};

module.exports = cartController;
