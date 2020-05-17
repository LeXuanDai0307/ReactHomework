import React from 'react';
import './Counter.css';

function Counter(props) {
        const sum = props.product.reduce((total, array) => {
            return total + (array.price * array.amount);
        }, 0);
        const amount = props.product.reduce((total, array) => {
            return total + array.amount;
        }, 0)
        return (
            <div className="counter">
                <span>Thành tiền: {sum}</span>
                <span>Tổng số sản phẩm trong giỏ: {amount}</span>
            </div>
        )
}
export default Counter;