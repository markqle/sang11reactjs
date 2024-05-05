import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        console.log(this.props.phone)
        
        let {phone, addToCart} = this.props 
        let { hinhAnh, tenSP, giaBan } = phone
        return (
            <div className="card">
                <img src={hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <p className="card-text">{giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal"
                    onClick={() => { 
                        addToCart(phone);
                     }}

                    >Them gio hang</button>
                </div>
            </div>
        )
    }
}
