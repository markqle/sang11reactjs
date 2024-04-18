import React, { Component, Fragment } from 'react'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'
import FooterComponent from './FooterComponent'

export default class BodyComponent extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <BannerComponent />
                <div className="row">
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                </div>
                <FooterComponent/>
            </Fragment>
        )
    }
}
