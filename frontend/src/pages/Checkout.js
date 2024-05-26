import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const [cart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [timeForShip, setTimeForShip] = useState('');
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        const order = {
            cartItems: cart.map(item => ({ productId: item.productId, quantity: item.quantity })),
            address,
            phone,
            timeForShip
        };

        axios.post('http://localhost:5000/v1/cart/place-order', order)
            .then(response => {
                console.log('Order placed successfully:', response.data);
                localStorage.removeItem('cart');
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error placing the order!', error);
            });
    };

    const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="grid grid-cols-1 gap-4">
                {cart.map(item => (
                    <div key={item.productId} className="flex justify-between items-center border p-4 rounded-lg">
                        <div>
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-gray-600">Price: {item.price} VND</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-right mt-4">
                <p className="text-lg font-bold">Total: {totalCartPrice} VND</p>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your address"
                />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input 
                    type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Time for Shipment</label>
                <input 
                    type="datetime-local" 
                    value={timeForShip} 
                    onChange={(e) => setTimeForShip(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="text-right mt-4">
                <button 
                    onClick={handlePlaceOrder} 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default Checkout;
