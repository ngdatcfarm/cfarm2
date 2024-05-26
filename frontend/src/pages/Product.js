import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';

function Product() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.productId === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.productId === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ));
        } else {
            setCart([...cart, { productId: product.id, name: product.name, price: product.price, quantity: 1 }]);
        }
    };

    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <div className="relative" onClick={() => setShowCart(true)}>
                    <FaShoppingCart className="text-2xl cursor-pointer" />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{totalCartItems}</span>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg p-4 text-center">
                        <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4"/>
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold mb-2">{product.price} VND</p>
                        <button 
                            onClick={() => addToCart(product)} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Cart showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
        </div>
    );
}

export default Product;
