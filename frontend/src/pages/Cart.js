import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

function Cart({ showCart, setShowCart, cart, setCart }) {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.productId !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item =>
            item.productId === productId
                ? { ...item, quantity: Math.max(1, item.quantity + quantity) }
                : item
        ));
    };

    const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleOrder = () => {
        setShowCart(false);
        navigate('/checkout');
    };

    const handleClickOutside = (event) => {
        if (event.target.id === 'cart-overlay') {
            setShowCart(false);
        }
    };

    return (
        <div id="cart-overlay" className={`fixed inset-0 z-50 ${showCart ? 'block' : 'hidden'}`} onClick={handleClickOutside}>
            <div className="fixed top-0 right-0 w-1/3 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out" style={{ transform: showCart ? 'translateX(0)' : 'translateX(100%)' }}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <button onClick={() => setShowCart(false)}>
                        <FaTimes className="text-2xl" />
                    </button>
                </div>
                <div className="p-4">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            <div className="grid grid-cols-1 gap-4">
                                {cart.map(item => (
                                    <div key={item.productId} className="flex justify-between items-center border p-4 rounded-lg">
                                        <div>
                                            <h2 className="text-lg font-bold">{item.name}</h2>
                                            <div className="flex items-center">
                                                <button onClick={() => updateQuantity(item.productId, -1)} className="bg-gray-300 px-2 py-1 rounded-l-lg">-</button>
                                                <input type="text" readOnly value={item.quantity} className="w-12 text-center border-t border-b"/>
                                                <button onClick={() => updateQuantity(item.productId, 1)} className="bg-gray-300 px-2 py-1 rounded-r-lg">+</button>
                                            </div>
                                            <p className="text-gray-600">Price: {item.price} VND</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.productId)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="text-right mt-4">
                                <p className="text-lg font-bold">Total: {totalCartPrice} VND</p>
                                <button
                                    onClick={handleOrder}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;



