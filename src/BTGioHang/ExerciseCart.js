import React, { Component, Fragment } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'


export default class ExerciseCart extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    //khai bao state, goi setState
    //gioHang moi tao => chua co san pham,
    //tao san pham test => test binding state
    state={
        gioHang: [
            
        ]
    }

    //input san pham dang duoc click
    // {maSP:1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/phone/vsphone.jpg", soLuong: 1},
    addToCart = (phoneClick) =>{
        // nơi gọi setState
        // tạo đối tượng riêng cho giỏ hàng
        console.log(phoneClick)
        let {maSP, tenSP, giaBan, hinhAnh} = phoneClick;
        let cartItem = {
            maSP: maSP,
            tenSP: tenSP,
            giaBan: giaBan,
            hinhAnh: hinhAnh,
            soLuong: 1
        }
        let gioHangUpdate = [...this.state.gioHang]

        //find():duyệt mảng, so sánh theo điều kiện tìm => return về obj tìm được
        let cartFind = this.state.gioHang.find((cartItem) => cartItem.maSP === phoneClick.maSP)
        //Check sản phẩm đã có ở giỏ hàng k ? nếu có tăng số lượng
        if (cartFind){
            // có sẳn phẩm => tăng số lượng
            cartFind.soLuong += 1;
        }else{
            // thêm mới vào mảng
            //[...copy phần tử từ mảng cũ, thêm phần tử mới]
            // tạo mảng mới => địa chỉ mới => xử lý vẫn đề tham chiếu
            gioHangUpdate.push(cartItem);
        }

        //TODO: goi setState và điền state mới vào
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className="cart-Group" data-toggle="modal" data-target="#exampleModal">
                            Gio Hang (0)
                        </div>
                    </div>
                </nav>

                <div className='Content py-5'>
                    <h2>Danh sách sản phẩm</h2>
                    <ProductList addToCart={this.addToCart} arrPhone={this.arrPhone} />

                </div>

                <Cart gioHang={this.state.gioHang}/>

            </Fragment>
        )
    }
}
