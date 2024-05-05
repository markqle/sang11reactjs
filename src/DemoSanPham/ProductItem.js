import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        console.log(this.props)
        let {phoneObj, showInfo} = this.props
        let {hinhAnh, tenSP, giaBan} = this.props.phoneObj
        return (
            <div className="card">
                <img src={hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <p>{giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        showInfo(phoneObj)
                    }}>Xem Chi Tiet</button>
                </div>
            </div>
        )
    }
}
