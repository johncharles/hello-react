import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
}

handleIncrease = () => {
    this.setState({
        number: this.state.number - 1
    });
}