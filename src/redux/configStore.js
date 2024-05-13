//store lưu trữ chung các giá trị cần truyền giữa các component
import { combineReducers, createStore } from "redux";

// xác định kiểu dữ liệu của state
// dữ liệu nào cần lưu vô state

//!B1: khai báo giá trị ban đầu cho state
const gioHang = []

//*du lieu can luu:
//mảng đối tượng xúc xắc: [{hinhAnh:"./img/game/1.png", diem:1 }]
//datCuoc: true (tài), false (xỉu)
// soBanThang: 0, tongSoBanChoi: 0
const gameState= {
    mangXucXac: [
        {hinhAnh:"./img/game/1.png", diem:1 },
        {hinhAnh:"./img/game/1.png", diem:1 },
        {hinhAnh:"./img/game/1.png", diem:1 }
    ],
    datCuoc: true,
    soBanThang: 0,
    tongSoBanChoi: 0
}

// dữ liệu cần thay đổi
const rootReducer = combineReducers({
    //reducers: các state sẽ được lưu ở đây
    //!B2: phuong thuc chua state (nhận vào tham số state), tra ve state 
    gioHangReducer: (state = gioHang, action) => {
        console.log(action)
        switch (action.type) {
            case "THEM_GIO_HANG":

                console.log("THEM_GIO_HANG")
                let { maSP, tenSP, giaBan, hinhAnh } = action.phone;
                let cartItem = { maSP: maSP, tenSP: tenSP, giaBan: giaBan, hinhAnh: hinhAnh, soLuong: 1 }
                //copy mang sang mang moi
                let gioHangUpdate = [...state]
                let cartFind = gioHangUpdate.find(cartItem => cartItem.maSP === maSP)
                if (cartFind) {
                    //có sản phẩm => tăng số lượng
                    cartFind.soLuong += 1;
                } else {
                    //thêm mới vào mảng
                    //* [...copy phần tử từ mảng cũ, thêm phần tử mới]
                    //* tạo mảng mới => địa chỉ mới => xử lý vấn đề tham chiếu
                    // let gioHangUpdate = [...this.state.gioHang, cartItem]
                    gioHangUpdate.push(cartItem);
                }


                // return state;//gioHang ban dau
                //=> phải trả về biến mới => địa chỉ => redux mới nhận biết thay đổi
                // => render lại UI
                return gioHangUpdate;
            case "XOA_GIO_HANG":
                let gioHangMoi = state.filter(cartItem => cartItem.maSP !== action.maSPXoa)
                return gioHangMoi;
            case "TANG_GIAM":
                let gioHoangUpdateSL = [...state]
                let findItem = gioHoangUpdateSL.find((cartItem) => {
                    return cartItem.maSP === action.maSPClick
                })

                if (findItem) {
                    //tìm thấy
                    // soLuong += 1; soLuong += -1 (soLuong -1 )
                    findItem.soLuong += action.sl
                    if (findItem.soLuong < 1) {
                        alert("Số lượng không được dưới 1")
                        // sl= 0 - -1 => 0 + 1 => luôn về 1
                        findItem.soLuong -= action.sl
                    }
                }
                return gioHoangUpdateSL

            default:
                return state;
        }
        // //trả về state
        // return state;// gioHang
    },

    gameReducer:(state=gameState, action)=>{
        return state;
    }
    //mỗi reducer giống 1 tính năng của ứng dụng
    // xemChiTietReducer: () => {

    // }
})

//Store nó nhận giá trị
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// class MyClass{
//     first = ()=>{

//     }
// }

// const rootReducer = {
//     gioHangReducer: () =>{

//     }
// }