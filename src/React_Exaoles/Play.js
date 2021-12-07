import React from 'react'

class Play extends React.Component {
    render() {
        return (
            <div>
          <b>You {this.props.winner ? " win" : " lose"}!</b>      
            </div>
        )
    }
}

export default Play
