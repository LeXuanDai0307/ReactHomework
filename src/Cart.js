import React from 'react';
import './Cart.css';

function Cart(props) {
    function handleClick(event) {
        props.onCartChange(event.target.value);
        console.log(event.target.value)
    }
    return (
        <div className="cart__container">
            <ul className="cart__list">
                {props.product.map( item => 
                    {
                        if (item.status) {
                        return (
                            <li key={item.id}>
                                <div className="cart__item">
                                    <span className="cart__item-name cart__item-infor">Sản phẩm: {item.name}</span>
                                    <span className="cart__item-price cart__item-infor">Giá: {item.price}</span>
                                    <span className="cart__item-amount cart__item-infor">Số lượng: {item.amount}</span>
                                </div>
                                <div className="cart__item-remove">
                                    <button type="button" onClick={handleClick} value={item.id}>
                                        Gỡ 1 sản phẩm
                                    </button>
                                </div>
                            </li>
                        )}
                    })}
            </ul>
        </div>
    )
}

export default Cart;