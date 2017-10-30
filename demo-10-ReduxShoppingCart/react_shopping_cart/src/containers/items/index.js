import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions';
import './item.css';

class Items extends Component {

    renderList = () => {
        const {items, fillCartAction} = this.props;

        return items.map((item) => (
            <li key={item.id} className="Items-list-item" onClick={() => fillCartAction(item)}>
                <img role="presentation" src={item.link}/>
                <span>{item.title}</span>
            </li>
        ));
    };

    render() {
        return (
            <ul className="Items-list">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    items: reduxState.itemsRD
});

const mapDispatchToProps = (dispatch) => ({
    fillCartAction: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);