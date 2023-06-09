import {Link} from 'react-router-dom';
import '../assets/css/App.css';
const NavBar = () => {
  return (
    <nav className="Navbar bg-dark text-light mb-5">
      <div className="container-fluid">
        <h3 className="mx-auto"> WEATHERAPI.COM </h3>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <Link to={'/'} class="nav-link active" aria-current="page" href="#">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={'/Home'} class="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={'/Nosotras'} class="nav-link active" aria-current="page" href="#">
                    Sobre Nosotras
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={'/Contactanos'} class="nav-link active" aria-current="page" href="#">
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
