import React from 'react';
import Card from './Card';

export default class ListItems extends React.Component {
    render() {
        let cards = this.props.cards.map((card) => <Card key={card.id} {...card}/>);

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}