import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Notfound from "./pages/404";
import Class from "./pages/Class";
import Main from "./pages/Main";
import MyCalendar from "./pages/MyCalendar";
import Dal from "./pages/Dal";
import Header from './components/Header';
import { Navigate } from "react-router-dom";
import { RecoilRoot } from 'recoil';



  function App() {
    return (
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<><Header /> <Main /> </> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/mycalendar" element={<MyCalendar />} />
          <Route path="/class" element={<Class />} />
          <Route path="/dal" element={<Dal />} />
          <Route path="*" element={<><Header /> <Main /> </> }/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    );
  }
export default App;