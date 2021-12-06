import React from "react";

class HelloDef extends React.Component { 
    static defaultProps = { 
    from: "Joe",
    to: "sami"
     }; 
    render() { 
    return (
    <p>Hi {this.props.to} from {this.props.from}</p>
    ) 
    } 
}

export default HelloDef;