// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  clicky = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }


  render() {
    console.log(this.state.timesClicked)
    return(
        <button onClick={this.clicky}>
        </button>
    )
  }
}
