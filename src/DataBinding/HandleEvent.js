import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //nfn tao arrow function
    // khong co tham so
    testEventClick = () => {
        alert('click roi ne')
    }

    // co tham so
    showInfo = (name) => {
        alert(`Ten khach hang: ${name}`)
    }

    // khong cho phep render lai UI => chi render lai thong qua State

    render() {
        let nameClient = "Nguyễn Thị Khách Hàng"
        return (
            //  <Fragment>
            // {} binding: đưa biến vào jsx
            <div className = "col-3">
                <button className='btn btn-danger' onClick={this.testEventClick}>Click</button>
                {/* chạy khi load do dấu ngoặc tròn */}
                {/* anfn: ham an danh tao arrow function */}
                <button className='btn btn-danger' onClick={(event) => { 
                    // event (e, evt): sự kiện có sẵn của thẻ UI
                    //event.target: xác định thẻ nào được click (được user tác động) mà không cần xử lý với dom
                    console.log(event.target)
                    event.target.style.backgroundColor = "green"
                    this.showInfo(nameClient)
                }}>Click Me</button>

                {/* khi click button => render card  */}
                <button className='btn btn-success'>Render Card</button>
                {/* vi tri UI card */}
            </div>
            // </Fragment>
        )
    }
}

//Class ES6
// phuong thuc: function, arrow function (hạn chế => sai ngữ cảnh của this)
// this không nhận diện được class đang sử dụng => không truy xuất được thuộc tính và phương thức
//? Reactjs => thoải mái dùng function, có thể dùng arrow function cho phương thức
// Event
/**
 * JS: có ngoặc tròn là chạy khi load, còn ko có ngoặc tròn thì chạy khi click
 */
// C1
// document.getElementById("IDButton").onclick = testEventClick;
// C2
// <button onclick="testEventClick()">Click</button>

// chạy khi load
// document.getElementById("IDButton").onclick = showInfo(nameClient);
 // khắc phục bằng hàm ẩn danh
// document.getElementById("IDButton").onclick = function(){
//     //* khi click chạy code trong hàm ẩn danh
//     showInfo(nameClient)
// }