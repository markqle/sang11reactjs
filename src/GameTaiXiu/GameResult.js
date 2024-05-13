import React, { Component } from 'react'
import { connect } from 'react-redux'
class GameResult extends Component {
    render() {
        console.log(this.props)
        let {datCuoc, soBanThang, tongSoBanChoi} = this.props.gameReducerObj
        return (
            <div className="game-result">
                <p>BẠN CHỌN: <span className="text-danger">{datCuoc==true? "TÀI": "XỈU"}</span></p>
                <p>SỐ BÀN THẮNG: {soBanThang} <span className="text-success"></span></p>
                <p>TỔNG SỐ BÀN CHƠI: {tongSoBanChoi} <span className="text-primary"></span></p>
                <button className="btn btn-success">PLAY GAME</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    //return vao props reducer lay duoc
    return {
        gameReducerObj: rootReducer.gameReducer
    }
}


export default connect(mapStateToProps)(GameResult);