import React from 'react';
import ListItems from './ListItems';

export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div className="app">
                <ListItems id='todo' title="To Do" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                }/>
                <ListItems id='in-progress' title="In Progress" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                }/>
                <ListItems id='done' title='Done' cards={
                    this.props.cards.filter((card) => card.status === "done")
                }/>
            </div>
        );
    }
}