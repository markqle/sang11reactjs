import React, { Component } from 'react'

export default class DemoFontSize extends Component {
    /**
     * + tao UI
     * + State
     * - Xac dinh bien nao can luu vo state (bien co gia tri doi khi user tac dong)
     *  - binding bien do len UI
     * - Su dung setState => render lai UI khi gia tri doi => goi setState o phuong thuc duoc chay khi user tac dong
     */

    state = {
        fs:16
    }

    tangFS = () => { 
        let newState = {
            fs: this.state.fs +1
        }
        this.setState(newState)
     }
    
     giamFS = () => { 
        // neu chi doi 1 thuoc tinh
        this.setState({
            fs: this.state.fs -1
        })
     }

  render() {
    let objStyle = {
        fontSize : "16px",
        fontWeight : "bold"
    }
    return (
      <div>
        <h2>Tang giam font-size</h2>
        <p style={{fontSize:`${this.state.fs}px`}} className='alert alert-warning'> Nguyen Thi Khach Hang
        {/* module css => class component */}
        </p>

        <button className='btn btn-success' onClick={this.tangFS}>+</button>
        <button className='btn btn-danger' onClick={this.giamFS}>-</button>
      </div>
    )
  }
}

//ES6
//font = 1 
// document.getElementById("id").style.fontSize = font + 1 


