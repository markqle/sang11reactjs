import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import HomeComponent from './BTComponent/HomeComponent';
import BodyComponent from './BaiTapThucHanhLayOut/BodyComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './DataBinding/HandleEvent';
import DemoState from './DemoState/DemoState';
import DemoFontSize from './DemoState/DemoFontSize';
import DemoCar from './DemoState/DemoCar';
import DemoProduct from './DemoSanPham/DemoProduct';
import ExerciseCart from './BTGioHang/ExerciseCart';
import ExerciseCartRedux from './BTGioHangRedux/ExerciseCartRedux';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';

//component chính
// các object thẻ built in (có sẵn): div, p, a, li...
// các UI, thẻ dev tự tạo: components => viết hoa chữ cái đầu của tên Pascal Case
function App() {
  // gọi component
  return (
    <div className='main'>
      {/* <DataBinding/>
      <HandleEvent/> */}
      {/* <DemoState/> */}
      {/* <DemoFontSize/> */}
      {/* <DemoCar/> */}
      {/* <DemoProduct/> */}
      {/* <ExerciseCartRedux/> */}
      <GameTaiXiu />
    </div>

  );
}

export default App;

// nhứng nội dung HTML trong reactjs => đối tượng jsx
// <div className='container'> </div>
//<div></div>, <img/>