import React, { Component, Fragment } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      //! chỉ được phép có 1 thẻ div bao bên ngoài => dư các thẻ div ko cần thiết
      <Fragment>
        HomeComponent
        <HeaderComponent />
        <div className="row">
          <div className="col-4">
            <NavComponent />
          </div>
          <div className="col-8">
            <ContentComponent />
          </div>
        </div>
        <FooterComponent />


      </Fragment>
    )
  }
}
// dùng thẻ cha ảo => giúp đúng cú pháp của react, không sinh ra thẻ trên UI
// root cause: vì đây là đối tượng
// return obj (luôn là 1 obj duy nhất)

