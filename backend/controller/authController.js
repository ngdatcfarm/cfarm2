const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authController = {
    registerUser: async (req, res) => {
        try {
            const { username, phone, password, address1, address2, address3, address4, admin } = req.body;

            // Kiểm tra xem số điện thoại đã tồn tại chưa
            const existingUser = await User.findOne({ where: { phone } });
            if (existingUser) {
                return res.status(400).json({ message: 'Số điện thoại đã tồn tại' });
            }

            // Mã hóa mật khẩu
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Tạo người dùng mới
            const newUser = await User.create({ 
                username, 
                phone, 
                password: hashedPassword, 
                address1, 
                address2, 
                address3, 
                address4, 
                admin 
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Đăng nhập
    loginUser: async (req, res) => {
        try {
            // Kiểm tra xem người dùng đã đăng nhập chưa
            const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
            if (token) {
                return res.status(400).json("Bạn cần đăng xuất trước");
            }

            const user = await User.findOne({ where: { phone: req.body.phone } });
            if (!user) {
                return res.status(404).json("Sai số điện thoại hoặc mật khẩu");
            }

            const validatePassword = await bcrypt.compare(req.body.password, user.password);
            if (!validatePassword) {
                return res.status(404).json("Sai số điện thoại hoặc mật khẩu");
            }

            const accessToken = jwt.sign(
                {
                    id: user.id,
                    admin: user.admin,
                },
                process.env.JWT_ACCESS_KEY,
                { expiresIn: "7d" }
            );

            // Lưu token vào cookie
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            // Loại bỏ mật khẩu trước khi trả về thông tin người dùng
            const { password, ...otherDetails } = user.toJSON();
            res.status(200).json({ ...otherDetails, accessToken });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    logoutUser: (req, res) => {
        res.clearCookie("accessToken");
        res.status(200).json({ message: "Đăng xuất thành công" });
    }
};

module.exports = authController;
