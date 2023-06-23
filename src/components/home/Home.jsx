import '../../assets/css/App.css';
import CardClima from '../clima/CardClima';
function Home() {
  return (
    <div className="App">
        <p>
          <CardClima/>
        </p>
    </div>
  );
}

export default Home;