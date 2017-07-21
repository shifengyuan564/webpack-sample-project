import React from 'react';
import Card from './Card';

export default class ListItems extends React.Component {
    render() {
        let cards = this.props.cards.map((card) =>
            <Card id={card.id}
                  title={card.title}
                  description={card.description}
                  tasks={card.tasks}/>
        );

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}