import React, { Component } from 'react'
import { choice } from './helpers';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}, 
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}

        ]
    }
    constructor(props) {
        super(props)

        this.state = {
            currCoin: null,
            numFlips:0,
            numHeads:0,
            numTails:0
        }
    }
    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,               
                currCoin: newCoin,
                numFlips: st.numFlips + 1            
            }
            if(newCoin.side ==="heads"){
                newState.numHeads +=1;
            } else{
                newState.numTails += 1;
            }
            return newState;
            // alt return{
            //     currCoin: newCoin,
            //     numFlips: st.numFlips +1,
            //     numHeads: st.numHeads + (newCoin.side === "heads" ? 1:0),
            //     numTails: st.numTails + (newCoin.side === "tails" ? 1:0)
            // }
        })
    }
    handleClick = () => {
        this.flipCoin();
    }

    render() {
        return (
            <div>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip Coin</button>
                <h2>Out of {this.state.numFlips} flips, you have {this.state.numHeads} heads and {this.state.numTails} </h2>
                
            </div>            
        )
    }
}

export default CoinFlipper