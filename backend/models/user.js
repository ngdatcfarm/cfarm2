const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 40] // Giới hạn tối đa 40 ký tự
        }
    },
    phone: {
        type: DataTypes.STRING, // Để lưu số điện thoại, sử dụng kiểu STRING thay vì INTEGER
        allowNull: false,
        unique: true, // Không được phép trùng
        validate: {
            notEmpty: true,
            len: [9, 15] // Giới hạn từ 9 đến 15 số
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100] // Mật khẩu phải có ít nhất 5 ký tự
        }
    },
    address1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address3: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address4: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    admin: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User;
