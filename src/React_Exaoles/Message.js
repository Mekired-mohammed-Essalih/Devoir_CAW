import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
    render() { 
        const msgs = [ {id: 1, text: "message 1!"}, 
        {id: 2, text: "Message 2!"} ]; 
        return ( <ul> { msgs.map(m => 
                <li>{m.text}</li>) } </ul> ); 
    } 
        
}

export default Message
