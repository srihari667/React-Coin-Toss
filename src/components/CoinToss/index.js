// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, totalCount: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const toss = Math.floor(Math.random() * 2)
    if (toss === 0) {
      this.setState(prevState => ({
        tossResultImage: HEADS_IMG_URL,
        totalCount: prevState.totalCount + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossResultImage: TAILS_IMG_URL,
        totalCount: prevState.totalCount + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {tossResultImage, totalCount, heads, tails} = this.state

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails"> Heads (or) Tails</p>
          <img src={tossResultImage} className="image" alt="toss result" />
          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
