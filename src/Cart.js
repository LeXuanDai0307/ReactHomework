import React from 'react';
import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onCartChange(event.target.value);
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="cart__container">
                <ul className="cart__list">
                    {this.props.product.map( item => 
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
                                        <button type="button" onClick={this.handleClick} value={item.id}>
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
}

export default Cart;