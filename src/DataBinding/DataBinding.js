//rcc 
import React, { Component } from 'react'

export default class DataBinding extends Component {

    // Thuộc tính
    // sử dụng cho mọi phương thức của class
    img = "https://i.pravatar.cc/?u=80"

    //Phương thức renderCard
    renderCard() {
        let client = {
            name: "Nguyen Van khach hang",
            age: 20,
            avatar: "https://i.pravatar.cc/?u=90"
        }

        //C1: viết thẻ mở chung hàng với return
        return <div className="card">
            <img src={client.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    }

    // phương thức render => render UI
    // {this.img}: binding thuoc tinh
    render() {
        //*local scope => chỉ sử dụng cho 1 phương thức
        let name = "Nguyễn Văn Khách Hàng";

        //C2:: sử dụng dấu () => xuống hàng thẻ js
        return (
            <div className="col-3">

                {/* <img src={this.img} class="card-img-top" alt="..." /> */}
                {/* gọi phương thức => return UI  */}
                {this.renderCard()}
            </div>

        )
    }
}


//Dom thẻ hiển thị nội dung
// let result = "Ket qua"
// document.getElementById("txtNotify").innerHTML = result;
// react => { result }


// tinhDTB(){
//     return 3 + 3 + 3 / 3
// }

// document.getElementById("txtNotify").innerHTML = tinhDTB();

// react => {tinhDTB()}