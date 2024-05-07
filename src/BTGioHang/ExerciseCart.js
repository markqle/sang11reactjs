import React, { Component, Fragment } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

export default class ExerciseCart extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    //Khai báo state, gọi setState
    //gioHang mới tạo => chưa có sản phẩm,
    // tạo sản phẩm test => test binding state
    // dữ liệu có thể tính toán từ data có sẵn thì ko cần lưu ở database => thành tiền không lưu ở DB

    state = {
        gioHang: []
    }

    //input san pham đang được click
    //   { maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/phone/vsphone.jpg", soLuong: 1 }
    addToCart = (phoneClick) => {
        console.log(phoneClick)
        //nơi gọi setState
        //* tạo đối tượng riêng cho giỏ hàng
        let { maSP, tenSP, giaBan, hinhAnh } = phoneClick;
        let cartItem = { maSP: maSP, tenSP: tenSP, giaBan: giaBan, hinhAnh: hinhAnh, soLuong: 1 }
        let gioHangUpdate = [...this.state.gioHang]

        //Check sản phẩm đã có ở giỏ hàng ko?
        //find(): duyệt mảng, so sánh theo điều kiện tìm => return về obj tìm được
        // let cartFind = this.state.gioHang.find((cartItem) => {
        //     return cartItem.maSP === phoneClick.maSP
        // })
        let cartFind = this.state.gioHang.find(cartItem => cartItem.maSP === phoneClick.maSP)


        if (cartFind) {
            //có sản phẩm => tăng số lượng
            cartFind.soLuong += 1;
        } else {
            //thêm mới vào mảng
            //* [...copy phần tử từ mảng cũ, thêm phần tử mới]
            //* tạo mảng mới => địa chỉ mới => xử lý vấn đề tham chiếu
            // let gioHangUpdate = [...this.state.gioHang, cartItem]
            gioHangUpdate.push(cartItem);
        }




        //TODO: gọi setState và điền state mới vào
        this.setState({
            gioHang: gioHangUpdate
        })

    }

    //input: mã sản phẩm cần xóa
    deleteCart = (maSPClick) => {
        console.log(maSPClick)
        //C1: tìm sp cần xóa (find, findIndex)
        // => splice => xóa dựa vào vị trí

        // [{ maSP: 1 }, { maSP: 2 }, { maSP: 3 }]
        // C2: filter() return mảng mới : điều kiện lọc mảng các sản phẩm giỏ hàng không chứa maSP cần xóa
        // let gioHangMoi = this.state.gioHang.filter((cartItem) => { 
        //*     // return cartItem.maSP !== 3
        //     return cartItem.maSP !== maSPClick  //[{ maSP: 1 }, { maSP: 2 }]
        //  })

        let gioHangMoi = this.state.gioHang.filter(cartItem => cartItem.maSP !== maSPClick)

        //TODO: gọi setState
        //? dùng để render lại UI
        this.setState({
            gioHang: gioHangMoi
        })

    }

    // sl + 1, sl - 1
    // Truyền tham số
    //soLuong => tăng +1, giảm -1; thay đổi sl => cập nhật sản phẩm
    // input: mã sản phẩm cần tăng sl, số lượng tăng hoặc giảm
    changeSL = (maSPClick, sl) => {
        console.log(maSPClick, sl)
        // Tìm sp cần đổi số lượng => cập nhật thuộc tính số lượng
        //find() => return obj
        // let gioHang = this.state.gioHang // biến có địa chỉ mới

        let { gioHang } = this.state
        // find là callback function sẽ duyệt từng sản phẩm trong giỏ hàng
        let findItem = gioHang.find((cartItem) => {
            return cartItem.maSP == maSPClick
        })

        if (findItem) {
            //tìm thấy
            // soLuong += 1; soLuong += -1 (soLuong -1 )
            findItem.soLuong += sl
            if (findItem.soLuong < 1) {
                alert("Số lượng không được dưới 1")
                // sl= 0 - -1 => 0 + 1 => luôn về 1
                findItem.soLuong -= sl
            }
        }

        //TODO: setState
        this.setState({
            gioHang: gioHang
        })

    }


    sumSL = () => {
        let { gioHang } = this.state
        //reduce
        let totalSL = gioHang.reduce((total, cartItem, index) => {
            return total += cartItem.soLuong
        }, 0)

        return totalSL
    }

    //Khai báo hàm tổng số tiền
    sumPrice = () => {
        let { gioHang } = this.state
        //reduce
        let totalGiaBan = gioHang.reduce((total, cartItem, index) => {
            return total += cartItem.soLuong * cartItem.giaBan
        }, 0)
        
        return totalGiaBan.toLocaleString()

        // C2
        return this.state.gioHang.reduce((total, cartItem, index) => total += cartItem.soLuong * cartItem.giaBan, 0)

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
                        <div className='cartGroup' data-toggle="modal" data-target="#exampleModal">
                            Giỏ hàng ({this.sumSL()})
                        </div>
                    </div>
                </nav>

                <div className='Content py-5'>
                    <h2>Danh sách sản phẩm</h2>
                    <ProductList addToCart={this.addToCart} arrPhone={this.arrPhone} />

                </div>

                <Cart sumPrice={this.sumPrice} changeSL={this.changeSL} deleteCart={this.deleteCart} gioHang={this.state.gioHang} />



            </Fragment>
        )
    }
}




// function tinhTong(){
//     let total = 0

//     for ( let cartItem of gioHang) {
//         total += cartItem.soLuong
//     }

//     return total
// }

// function tinhTongTien() {
//     let total = 0

//     for (let cartItem of gioHang) {
//         total += cartItem.soLuong * cartItem.giaBan
//     }

//     return total
// }