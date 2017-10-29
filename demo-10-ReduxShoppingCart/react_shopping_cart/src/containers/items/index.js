import React, {Component} from 'react';
import './item.css';

export default class Items extends Component {

    renderList = () => {
        const listOfData = [];
        return listOfData.map((item) => (
            <li key={item.id} className="Items-list-item" onClick={() => console.log('added to store')}>
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