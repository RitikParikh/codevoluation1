import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    componentDidMount(){
        console.log("grg")
        this.interval = setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        console.log("grgfDSB")
        clearInterval(this.interval)
    }
    tick =() =>{
        this.setState({count :this.state.count+1});
    }

  render() {
    console.log("rgaethatrnshnstdgnr");
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default IntervalClassCounter