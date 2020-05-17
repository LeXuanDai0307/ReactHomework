import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';
import Counter from './Counter';

function App() {
    const[listProduct, setListProduct] = useState(
                [
                    { id : 0, name : "Samsung Galaxy A11", price : 3690000, amount : 0, status : false},
                    { id : 1, name : "Samsung Galaxy A31", price : 6490000, amount : 0, status : false},
                    { id : 2, name : "Samsung Galaxy Fold", price : 50000000, amount : 0, status : false},
                    { id : 3, name : "Samsung Galaxy Z Flip", price : 36000000, amount : 0, status : false},
                    { id : 4, name : "Samsung Galaxy S20 Ultra", price : 29990000, amount : 0, status : false},
                    { id : 5, name : "Samsung Galaxy Note 10+", price : 26990000, amount : 0, status : false},
                    { id : 6, name : "Samsung Galaxy S20+", price : 23990000, amount : 0, status : false},
                    { id : 7, name : "Samsung Galaxy Note 10", price : 22990000, amount : 0, status : false},
                    { id : 8, name : "Samsung Galaxy A70", price : 9290000, amount : 0, status : false},
                ]
    );

    function handleProductChange(event) {
        let array = listProduct.slice();
        const amount = array[event].amount + 1;
        array[event].status = true;
        array[event].amount = amount;
        setListProduct(array);
    }

    function handleCartChange(event) {
        let array = listProduct.slice();
        const amount = array[event].amount - 1;
        if (amount === 0) {
            array[event].status = false;
        }
        array[event].amount = amount;
        setListProduct(array);
    }

    return (
        <div className="app">
            <div className="app__column app__column-left">
                <h1>Product</h1>
                <Product 
                    product={listProduct}
                    onProductChange={handleProductChange}
                />
            </div>
            <div className="app__column app__column-right">
                <div className="app__cart">
                    <h1>Cart</h1>
                    <div className="app__cart-container">
                        <Cart 
                            product={listProduct}
                            onCartChange={handleCartChange}
                        />
                        <div className="app__total">
                            <Counter product={listProduct} />
                        </div>
                    </div>  
                </div>  
            </div>
        </div>
    )
}
export default App;
