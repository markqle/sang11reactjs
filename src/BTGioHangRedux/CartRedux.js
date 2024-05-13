import React, { Component } from 'react'
import { connect } from 'react-redux'

//B3 : kết nối compoennt vs store

class CartRedux extends Component {
    renderCart = () => {
        let { gioHang } = this.props
        return gioHang.map((cartItem) => {
            let { maSP, hinhAnh, giaBan, soLuong, tenSP } = cartItem
            return <tr key={`cart${maSP}`}>
                <td>{maSP}</td>
                <td>
                    <img style={{ width: "50px" }} src={hinhAnh} alt="" />
                </td>
                <td>{tenSP}</td>

                <td>
                    <button onClick={() => {
                        let action = {
                            type:"TANG_GIAM",
                            maSPClick: maSP,
                            sl:-1
                        }
                        this.props.dispatch(action)

                    }} className='btn btn-success'>-</button>
                    <span> {soLuong} </span>
                    <button onClick={() => {

                        let action = {
                            type:"TANG_GIAM",
                            maSPClick: maSP,
                            sl:+1
                        }
                        this.props.dispatch(action)

                    }} className='btn btn-success'>+</button>
                </td>

                <td>{giaBan.toLocaleString()}</td>
                <td>{(giaBan * soLuong).toLocaleString()}</td>
                <td>
                    <button onClick={() => {
                        
                        const action = {
                            type: "XOA_GIO_HANG",
                            maSPXoa: maSP
                        }
                        this.props.dispatch(action)
                    }}

                        className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }

    sumPrice = () => {
        // let { gioHang } = this.state
        // //reduce
        // let totalGiaBan = gioHang.reduce((total, cartItem, index) => {
        //     return total += cartItem.soLuong * cartItem.giaBan
        // }, 0)
        
        // return totalGiaBan.toLocaleString()

        // C2
        return this.props.gioHang.reduce((total, cartItem, index) => total += cartItem.soLuong * cartItem.giaBan, 0).toLocaleString()

    }

    render() {
        console.log(this.props)
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>

                            {/* <div>Tổng số tiền: {this.props.sumPrice().toLocaleString()} </div> */}
                            <div>Tổng số tiền:
                                {this.sumPrice()} 
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// truyền vô connect
const mapStateToProp = (rootReducer) => {
    // tra ve state gioHang vào prop của component
    return {
        gioHang: rootReducer.gioHangReducer
    }
}


// component mới (react component + Redux)
const ComponentCartRedux = connect(mapStateToProp)(CartRedux)

export default ComponentCartRedux; //export de Component cha sử dụng component redux


//gọi hàm
// Callback function
//gọi hàm
//showInfo bắt buộc phải có return
//main(showInfo)



//Closure function
//khai báo hàm trong hàm
// connect ()()
// function main() {
//     function showInfo() {
//         console.log("123")
//     }
// }

