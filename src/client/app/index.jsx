import React, { Component } from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import GroceryList from './GroceryList.jsx';

class Hello extends React.Component {
    render () {
        var place = "World";
        return (
            <div>
                <p> Hello {place} </p>
                <AwesomeComponent/>
                <GroceryList/>
            </div>

    );
    }
}

render(<Hello/>, document.getElementById('app'));
