import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Notfound from "./pages/404";
import Class from "./pages/Class";
import Main from "./pages/Main";
import Header from './components/Header';
import { Navigate } from "react-router-dom";




  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/class" element={<Class />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    );
  }
export default App;