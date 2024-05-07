import React, { Component } from 'react'
import ProductItemRedux from './ProductItemRedux';

export default class ProductListRedux extends Component {

    renderPhones = () => {
        let { arrPhone } = this.props;
        return arrPhone.map((phone) => {
            return <div className="col-3" key={`phone${phone.maSP}`}>
                <ProductItemRedux phone={phone} />
            </div>
        })

    }

    render() {
        return (
            <div className="row">
                {this.renderPhones()}
            </div>
        )
    }
}
