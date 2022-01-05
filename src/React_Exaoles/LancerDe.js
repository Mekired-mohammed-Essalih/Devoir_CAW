import React from "react";
import react from "react";

export default class LancerDe extends React.Component{
    constructor(props) {
        super(props);
        this.state = { number: 1, number1:3, };
        this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState({
            number: Math.floor(Math.random() * 6)+1,
            number1:Math.floor(Math.random() *6)+1,
            });
            
            }
            
    render(){
        let msg="";
        let score=0;
        let image1="assete\\De"+this.state.number+".png";
        let image2="assete\\De"+this.state.number1+".png";
        if(this.state.number==this.state.number1){msg="You Win🏆🥇👏";score++}else{msg="Try again🔄";if(score>0){score--}}
        
        
        return(
            <div>
            <p>{this.state.number}</p>
                <img  src={image1} width="100px" />
            <img src={image2} width="100px"/>
            <br></br>
            <h1> {msg}</h1>
            <h1> Score:{score}</h1>
            <button onClick={this.handleClick} style={{backgroundColor:"yellow",height:"50px",fontSize:"20px",padding:"10px 10px", margin:"10px 10px 60px",borderRadius:"15px", fontFamily:"cursive"}} >lancer les dés</button>
            </div>
            
        )
    }
}