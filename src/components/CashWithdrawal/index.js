import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  onTryToWithdraw = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    } else {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state

    return (
      <div className="background">
        <div className="card1">
          <p className="slogo">S</p>
          <p className="para1">Sarah Williams</p>
        </div>
        <div className="card2">
          <p className="para2">Your Balance</p>
          <div className="card3">
            <h1 className="para3">{currentBalance}</h1>
            <p className="para4">In Rupees</p>
          </div>
        </div>
        <p className="para5">Withdraw</p>
        <p className="para6">CHOOSE SUM (IN RUPEES)</p>
        <ul className="buttons-container">
          {denominationsList.map(eachItem => (
            <DenominationItem
              key={eachItem.id}
              denominationItem={eachItem}
              onTryToWithdraw={this.onTryToWithdraw}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
