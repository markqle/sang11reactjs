import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderPhones = () => {
        // return trả mảng mới ra ngoài phương thức renderPhones()
        return this.props.arrPhone.map((item, index) => {
            // console.log(item)
            // return: trả về 1 mảng mới, chỉ dừng khi duyệt hết mảng
            let { maSP } = item;

            return <div className="col-4" key={`phone${maSP}`}>
                <ProductItem showInfo={this.props.showInfo} phoneObj={item}/>
            </div>
        })


        // return objPhones; // tra ve obj jsx col-4 de hien thi len UI
    }

    render() {
        console.log(this.props)
        return (
            //prop

            <div className='row'>
                {/* add nhieu col */}
                {/* <ProductItem tenSP="tenSP" /> */}
                {this.renderPhones()}
            </div>
        )
    }
}


//ES6

