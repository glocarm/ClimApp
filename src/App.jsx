import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Inicio from './components/inicio/Inicio';
// import NavBar from './components/menu/NavBar';
import Nosotras from './components/sobrenosotras/Nosotras';
import Contactanos from './components/contacto/Contactanos';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Nosotras' element={<Nosotras/>}/>
          <Route path='/Contactanos' element={<Contactanos/>}/>
        </Routes>
        </Router>
    </div>
  );
}
export default App;
