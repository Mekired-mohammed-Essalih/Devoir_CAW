import React from "react";

class Box extends React.Component { 
    static defaultProps= {
        message: "hello in default props",
        favoritColor: "red",
        otherColor: "yellow",
    };
    render() {  
    const somecolor = { color: this.props.favoriteColor, 
    backgroundColor: this.props.otherColor, 
    }; 
    return(
    <b style={somecolor}>{this.props.message}</b>); } }

    export default Box;