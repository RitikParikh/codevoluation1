import React, { Component } from 'react'

class ClassTImer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(() =>{
            this.setState(prevState => ({timer: prevState.timer+1}))
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

  render() {
    return (
      <div>
        class Timer - {this.state.timer}
        <button type="button" onClick={()=>clearInterval(this.interval)}>Cler Timer</button>
      </div>
    )
  }
}

export default ClassTImer