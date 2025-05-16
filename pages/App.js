import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Menu } from './Menu';
import { CongratsCard } from './Moodle-Tasks/CongratsCard';
import { HelloWorld } from './Moodle-Tasks/HelloWorld';
import { Bio } from './components/Other-Tasks/BioData';
import { SuperOverLeague } from './Moodle-Tasks/SuperOverLeague';
import { SocialButtons } from './Moodle-Tasks/SocialButtons';
import { Notifications } from './Moodle-Tasks/Notifications';
import { MemberLogin } from './Moodle-Tasks/MemberLogin';
import { TechnologyCards } from './Moodle-Tasks/TechnologyCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddSubReset } from './components/Hooks/hooks';
import { EatFruits } from './components/Hooks/Fruits';
import { Feedback } from './components/Customer Feedback/Feedback';
import { FeedbackEnd } from './components/Customer Feedback/FeedEnd';
import { DateFinder } from './components/Date/DateFinder';
import { Products } from './components/Json/Json';
import { ProductsDetails } from './components/Json/ProductDetails';
import { Table } from './components/Milestone/Download';
import { GetData } from './components/Node Connect/connectToDbs';
import { GetEmpData } from './components/Node Connect/EmpDetail/FrontToDbs';
import { GetUserData } from './components/UserName/getUser';
import { LoginPage } from './components/UserName/loginpage';
import { GetSingleData } from './components/Node Connect/EmpDetail/singleData';
import { Dashboard } from './components/UserName/dashboard';
import { UpdateUserData } from './components/UserName/update';

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Menu/>,<HelloWorld/>]}/>
        <Route path='/congrats' element={[<Menu/>,<CongratsCard/>]}/>
        <Route path='/league' element={[<Menu/>,<SuperOverLeague/>]}/>
        <Route path='/social' element={[<Menu/>,<SocialButtons/>]}/>
        <Route path='/notify' element={[<Menu/>,<Notifications/>]}/>
        <Route path='/login' element={[<Menu/>,<MemberLogin/>]}/>
        <Route path='/tech' element={[<Menu/>,<TechnologyCards/>]}/>
        <Route path='/hooks' element={[<Menu/>,<AddSubReset/>]}/>
        <Route path='/fruit' element={[<Menu/>,<EatFruits/>]}/>
        <Route path='/feed' element={[<Menu/>,<Feedback/>]}/>
        <Route path='/thankyou' element={[<Menu/>,<FeedbackEnd/>]}/>
        <Route path='/datefinder' element={[<Menu/>,<DateFinder/>]}/>
        <Route path='/json' element={[<Menu/>,<Products/>]}/>
        <Route path='/product/:id' element={[<Menu/>,<ProductsDetails/>]}/>
        <Route path='/milestone' element={[<Menu/>,<Table/>]}/>
        <Route path='/getdata' element={[<Menu/>,<GetData/>]}/>
        <Route path='/getEmpData' element={[<Menu/>,<GetEmpData/>]}/>
        <Route path='/singledata/:empno' element={[<Menu/>,<GetSingleData/>]}/>
        <Route path='/getUser' element={[<Menu/>,<GetUserData/>]}/>
        <Route path='/loginpage' element={[<Menu/>,<LoginPage/>]}/>
        <Route path='/dashboard/:id' element={[<Menu/>,<Dashboard/>]}/>
        <Route path='/updateProfile/:id' element={[<Menu/>,<UpdateUserData/>]}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
