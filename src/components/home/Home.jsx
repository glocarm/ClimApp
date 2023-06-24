import '../../assets/css/App.css';
import CardClima from '../clima/CardClima';
import NavBar from '../menu/NavBar';
function Home() {
  return (
    <div className="App">
       <NavBar/>
        <p>
          <CardClima/>
        </p>
    </div>
  );
}

export default Home;