import React from 'react';

class Hello extends React.Component { 
    static defaultProps = {
        from:"foufa",

    };
    render() {
    
    return (
    <p>Installation de react reussie {this.props.from}</p>
    )
    
    
   
    /*return ( 
        <div> 
        <p>Secret Message: </p> 
        <p>Hi {this.props.to} from {this.props.from}</p> 
        </div> ); */
    
     } 
    }

    export default Hello;