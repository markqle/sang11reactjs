import React, { Component } from 'react'

export default class ProductInfo extends Component {
    
    render() {
        let { chiTietSP } = this.props;
        return (
            <div className="row mt-5">
                <div className="col-4">
                    <img className='img-fluid' src={chiTietSP.hinhAnh} alt="" />
                </div>
                <div className="col-8">
                    <h2>Thong so ky thuat</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Man hinh</td>
                                <td>{chiTietSP.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{chiTietSP.heDieuHanh}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
