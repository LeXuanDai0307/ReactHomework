import React from 'react';
import './Counter.css';

function CountPrice(array) {
    var sum = 0;
    array.map(item => {
        if (item.status) {
            sum += item.amount * item.price;
        }
    })
    return sum;
}

function CountAmount(array) {
    var sum = 0;
    array.map(item => {
        if (item.status) {
            sum += item.amount;
        }
    })
    return sum;
}


class Counter extends React.Component {
    render () {
        const sum = CountPrice(this.props.product);
        const amount = CountAmount(this.props.product)
        return (
            <div className="counter">
                <span>Thành tiền: {sum}</span>
                <span>Tổng số sản phẩm trong giỏ: {amount}</span>
            </div>
        )
    }
}
export default Counter;