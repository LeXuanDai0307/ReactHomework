import React from 'react';
import './Product.css';

function Product(props) {  
    function handleClick(event) {
        props.onProductChange(event.target.value);
    }
    return (
        <div className="product__container">
            <ul className="product__list">
                {props.product.map((item) => (
                    <li key={item.id} className="product__item">
                        <span className="product__item-infor product__item-name">Sản phẩm: {item.name}</span>
                        <span className="product__item-infor product__item-price">Giá: {item.price}</span>
                        <button 
                            type="button" 
                            onClick={handleClick} 
                            value={item.id} 
                            className="product__item-infor product__item-add">
                            Thêm vào giỏ
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product;