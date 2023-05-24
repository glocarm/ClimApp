import logo from './logo.svg';
import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Inicio from './components/Inicio';
import NavBar from './components/NavBar';
import Nosotras from './components/Nosotras';
import Contactanos from './components/Contactanos';

function App() {
  return (
    <div className="App">
      
       <Router>
        <NavBar/>
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
