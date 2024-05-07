import React, { Component } from 'react'

export default class ProductItemRedux extends Component {
  render() {

    let { phone, addToCart } = this.props
    let { hinhAnh, tenSP, giaBan } = phone

    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal"
          
          >Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}
