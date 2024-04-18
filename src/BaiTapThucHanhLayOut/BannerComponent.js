import React, { Component } from 'react'

export default class BannerComponent extends Component {
    render() {
        return (
            <div className = 'banner'>
                <h2 className="card-title">A Warm Welcome!</h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-primary">Call to action</button>
            </div>
        )
    }
}
