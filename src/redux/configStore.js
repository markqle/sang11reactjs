//store lưu trữ chung các giá trị cần truyền giữa các component
import { combineReducers, createStore } from "redux";


// dữ liệu cần thay đổi
const rootReducer = combineReducers({
    //reducers: các state sẽ được lưu ở đây
})

//Store nó nhận giá trị
export const store = createStore(rootReducer)