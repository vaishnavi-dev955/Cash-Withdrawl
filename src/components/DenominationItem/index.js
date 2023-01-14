import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onWithdraw = () => {
    const {denominationItem, onTryToWithdraw} = this.props
    const {value} = denominationItem
    onTryToWithdraw(value)
  }

  render() {
    const {denominationItem} = this.props
    const {value} = denominationItem

    return (
      <li>
        <button className="button1" type="button" onClick={this.onWithdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
