const jwt = require("jsonwebtoken");

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
        if (token) {
            jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Vui lòng đăng nhập");
                }
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json("Bạn chưa được định danh");
        }
    },
    verifyAdmin: (req, res, next) => {
        if (req.user && req.user.admin === 1) {
            next();
        } else {
            res.status(403).json("Bạn phải là admin để thực hiện hành động này");
        }
    },
    verifyUser: (req, res, next) => {
        if (req.user && (req.user.admin === 0 || req.user.admin === 1)) {
            next();
        } else {
            res.status(403).json("Bạn phải đăng nhập để thực hiện");
        }
    },
    checkLoggedIn: (req, res, next) => {
        const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
        if (token) {
            jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                return res.status(400).json("Bạn cần đăng xuất trước");
            });
        } else {
            next();
        }
    }
};

module.exports = middlewareController;
