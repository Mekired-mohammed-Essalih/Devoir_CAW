import React from 'react'
import Play from './Play';

class Game extends React.Component {
    render(){
     const {p1, p2, p3} = this.props;
     return(
         <Play winner = {(p1==p2)||(p1==p3)} />
     )   
    }
}

export default Game;