import React, {Component} from 'react';
import {removeFromCart} from "../../actions/index";
import {connect} from 'react-redux';
import './shoppingCart.css';

export class ShoppingCart extends Component {

    renderShoppingCart = () => {
        const {spCart, removeAction} = this.props;

        return spCart.map((item) => {
            return (
                <li key={item.id}
                    className='SC-list-item'
                    onClick={() => removeFromCart(item.id)}
                >
                    <img src={item.link} role="presentation"/>
                    {item.title}
                </li>
            );
        })
    };

    render() {
        return (
            <ul className='SC-list'>
                {this.renderShoppingCart()}
            </ul>
        );
    }
}

const mapStateToProps = ({shoppingCartRD}) => ({
    spCart: shoppingCartRD
});

const mapDispatchToProps = (dispatch) => ({
    removeAction: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);