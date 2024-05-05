import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductInfo from './ProductInfo'

/**
 * 1. Tao UI
 * 2 - Binding data (dua len giao dien)
 * 3- State
 *      + Dữ liệu cần lưu vào State
 *          - Dữ liệu nào bị đổi +> obj phone cần hiển thị ở thông số kỹ thuật
 *          - kiểu dữ liệu => object
 *          - Binding state lên UI
 *      + Xác định phương thức sẽ gọi setState
 */





export default class DemoProduct extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    // sản phẩm đầu tiên luôn là default
    state = {
        chiTietSP: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" }
    }


    showInfo = (phoneCT) => {
        // goi setState
        console.log(phoneCT)
        let newState = {
            chiTietSP: phoneCT
        }
        this.setState(newState)
    }



    render() {
        // destructuring
        // let { chiTietSP } = this.state

        return (
            <div>
                <h2>Danh sách sản phẩm</h2>

                {/* chia component */}
                <ProductList showInfo={this.showInfo} arrPhone={this.arrPhone}/>
                <ProductInfo chiTietSP = {this.state.chiTietSP}/>
            </div>
        )
    }
}


/**
 * ES6
 */
// let content = ""; chuỗi các thẻ html col-4
// this.arrPhone.map((item, index) => {
//     content+=``
// })


// document.getElementById("dssp").innerHTML = content