import React, { Component } from 'react';

class GroceryList extends Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1">Bread</ListItem>
                <ListItem quantity="6">Eggs</ListItem>
                <ListItem quantity="2">Cheese</ListItem>
            </ul>
        );
    }
}

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} x {this.props.children}
            </li>
        );
    }
}

export default GroceryList;