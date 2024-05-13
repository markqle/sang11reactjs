import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItemRedux extends Component {
  render() {
    console.log(this.props)
    let { phone } = this.props
    let { hinhAnh, tenSP, giaBan } = phone

    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal"
            onClick={() => { 
              // action
              //type: giúp store phân loại tính năng nào cần thực thi
              const action = {
                type:"THEM_GIO_HANG", //bat buoc phai co
                phone: phone,

              }

              // dispatch
              this.props.dispatch(action);
             }}
          >Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}


//component chỉ đẩy dữ liệu lên store => không cần tạo mapStateToProp (nó đâu có lấy ra xài)
// const ComponentProductItemRedux = connect()(ProductItemRedux)

// export default ComponentProductItemRedux;

export default connect()(ProductItemRedux);