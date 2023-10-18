import Login from "./Componentes/Login/login";
import Año from "./Componentes/Años/Año";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
  
         
          <Routes>
          <Route path="/" element={<Login/>} />

          </Routes>

    </BrowserRouter>
 /*    <div>
    

    </div> */
  );
}

export default App;
