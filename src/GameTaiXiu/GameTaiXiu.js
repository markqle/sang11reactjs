import React, { Component } from 'react'
//external css (toàn bộ project đèu sử dụng được)
import "./GameTaiXiu.css"
import XucXac from './XucXac'
import GameResult from './GameResult'
//import hinh  theo module (dung khi luu anh o folder asset)
// import imgXucXac from "../asset/img/1.png"
// import imgXucXac2 from "../asset/img/2.png"
export default class GameTaiXiu extends Component {
    render() {
        return (
            <div className="game-content">
                <div className="container">
                    <h1>GAME TAI XIU</h1>
                    <XucXac />
                    <GameResult/>
                </div>
            </div>

        )
    }
}
