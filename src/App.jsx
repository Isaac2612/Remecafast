import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "./Paginas/Inicio";
import Cursos from "./Paginas/Cursos"; 
import Login from "./Paginas/Login";
import Registro from "./Paginas/Registro";
import HomeL from "./Paginas/homeL";
import Perfil from "./Paginas/perfil";
import Miscursos from "./Paginas/miscursos";
import Iniciar from "./Paginas/IniciarSesion";

 function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Cursos' element={<Cursos/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path="/HomeL" element={<HomeL/>}/>
         <Route exact path="/Perfil" element={<Perfil/>}/>
        <Route exact path="/Miscursos" element={<Miscursos/>}/>
        <Route exact path="/Iniciar" element={<Iniciar/>}/>
      </Routes>
    </Router>
  );
}

export default App;