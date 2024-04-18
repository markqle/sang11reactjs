import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import HomeComponent from './BTComponent/HomeComponent';
import BodyComponent from './BaiTapThucHanhLayOut/BodyComponent';

//component chính
// các object thẻ built in (có sẵn): div, p, a, li...
// các UI, thẻ dev tự tạo: components => viết hoa chữ cái đầu của tên Pascal Case
function App() {
  // gọi component
  return (
    <div className='container'>
      {/* <ClassComponents></ClassComponents>
       <ClassComponents/> */}
      {/* <FunctionComponent/> */}
      {/* .row: emment react giup tao div co class row  */}
      {/* crush relationship management */}
      {/* <div className="row">*/}
      {/* .col-3*4 */}
      {/* <ClassComponent/>

         <ClassComponent/>

        <ClassComponent/>

         <ClassComponent/>
       </div>  */}
      {/* <HomeComponent/>*/}


      <BodyComponent />


    </div>

  );
}

export default App;

// nhứng nội dung HTML trong reactjs => đối tượng jsx
// <div className='container'> </div>
//<div></div>, <img/>