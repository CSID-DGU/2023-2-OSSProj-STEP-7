import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Notfound from "./pages/404";
import Class from "./pages/Class";
import Main from "./pages/Main";
import { Navigate } from "react-router-dom";




function App() {

  return (
        <BrowserRouter>
            {/* {localStorage.getItem("token") ?  <Navigate replace to={`/class`} />: <Navigate replace to={"/main"} /> } */}
          <Routes>
            <Route path="/login" element={<Login /> } />
            <Route path="/class" element={<Class />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;