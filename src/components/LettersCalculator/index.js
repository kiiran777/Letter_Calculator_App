// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  onText = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    console.log(word)
    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="input"
            className="input"
            onChange={this.onText}
          />
          <p className="counter">No.of letters: {word.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
