import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    localData: [],
  }

  componentDidMount() {
    this.callState()
  }

  callState = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    // const filterData = cartData.filter(each => each.quantity !== 0)
    // this.setState({localData: filterData})
    this.setState({localData: cartData})
  }

  onIncrement = () => {
    const {id, renderState} = this.props
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const data = cartData.map(each =>
      each.id === id
        ? {
            id: each.id,
            cost: each.cost,
            quantity: each.quantity + 1,
            imageUrl: each.imageUrl,
            name: each.name,
          }
        : each,
    )
    const filterData = data.filter(each => each.quantity !== 0)
    localStorage.setItem('cartData', JSON.stringify(filterData))
    // localStorage.setItem('cartData', JSON.stringify(data))
    this.callState()
    renderState()
  }

  onDecrement = () => {
    const {id, renderState} = this.props
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const data = cartData.map(each =>
      each.id === id
        ? {
            id: each.id,
            cost: each.cost,
            quantity: each.quantity - 1,
            imageUrl: each.imageUrl,
            name: each.name,
          }
        : each,
    )
    const filterData = data.filter(each => each.quantity !== 0)
    localStorage.setItem('cartData', JSON.stringify(filterData))
    // localStorage.setItem('cartData', JSON.stringify(data))
    this.callState()
    renderState()
  }

  render() {
    const {localData} = this.state
    const {id, testIds} = this.props

    const checkId = localData.filter(each => each.id === id)
    console.log(checkId[0])
    const localCount = checkId[0] === undefined ? 0 : checkId[0].quantity
    console.log(localCount)
    return (
      <div className="counter-container">
        <button
          type="button"
          className="counter-btn"
          onClick={this.onDecrement}
          testid={testIds[0]}
        >
          -
        </button>
        <div testid={testIds[2]}>{localCount}</div>
        {/* <div>{localCount}</div> */}
        <button
          type="button"
          className="counter-btn"
          onClick={this.onIncrement}
          testid={testIds[1]}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
