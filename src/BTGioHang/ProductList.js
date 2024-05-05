import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderPhones = () => {
        let {arrPhone, addToCart} = this.props;
        return arrPhone.map((phone) => {
            return <div className="col-3" key={`phone${phone.maSP}`}>
                <ProductItem addToCart={addToCart} phone={phone} />
            </div>

        })
    }

    render() {
        console.log(this.props.arrPhone)
        return (
            <div className="row">
                {this.renderPhones()}
            </div>
        )
    }
}
