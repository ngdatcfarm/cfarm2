const User = require('../models/user');

const userController = {
    // Lấy tất cả người dùng
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Xóa người dùng
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.destroy({
                where: { id: userId }
            });

            if (user) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = userController;
