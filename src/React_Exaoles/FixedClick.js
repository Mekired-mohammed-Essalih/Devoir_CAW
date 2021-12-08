import React from 'react';

export default class FixedClick extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let c= this.state.clicked;
        if(c==false){
            this.setState({ clicked: true });
        }else{
            this.setState({ clicked: false });
        }
    }
    render() {
    return (
    <div>
    <h1>The Button is
    {this.state.clicked ? 'clicked' : 'not clicked'}
    </h1>
    <button onClick={this.handleClick}>Fixed</button>
    </div>
    );
    }
    }