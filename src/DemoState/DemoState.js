import React, { Component } from 'react';

export default class DemoState extends Component {
    /**
     * chưa đăng nhập: hiển thị button log in
     * đã đăng nhâp: hiển thị tên người dùng
     */

    // chua co su kien click

    //!thuộc tính
    //! state thuộc tính có sẵn của react component
    //! giá trị thay đổi khi click => lưu vào state

    // isLogin = false;
    state = {
        isLogin : false
    }

    renderLogin = () => {
        console.log(this.isLogin);
        if (this.isLogin) {
            return <span className="alert alert-danger">user001</span>;
        } else {
            return <button className='btn btn-success' onClick={this.handleLogin}>Login</button>;
        }
    }

    //*co su kien click
    //click login => doi gia tri cua isLogin false ->

    handleLogin = () => {
        this.isLogin = true
        console.log(this.isLogin)
        //hien thi lai UI
        // this.render();//! khong cho phep render / goi lai ham render
        // render lai UI thong qua khai niem State
        // xác định hàm / phương thức nào làm đổi state
        //! gán lại giá trị mới cho state => tạo giá trị state mới
        let newState = {
            isLogin: true
        }
        // gán giá trị thông qua setState
        // đổi giá trị cho state, render lại UI
        this.setState(newState);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

                    {/* C1: xu ly kiem tra o trong render() */}
                    {/* <div id="btnGroup">
                        {this.isLogin ? <span className="alert alert-danger">user001</span> : <button className='btn btn-success'>Login</button>}
                    </div> */}

                    {/* C2: xu ly kiem tra o trong phuong thuc => dung code phuc tap */}
                    <div>
                        {this.renderLogin()}
                    </div>
                </div>
            </nav>
        );
    }
}
