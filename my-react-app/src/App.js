import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton />
      </header>
    </div>
  );
}
export default App;

function MyButton() {
  let latitude;
  let longitude;

  function requestLocation() {
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
      position => { ({latitude, longitude} = position.coords); console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); });
  }

  return (
    <button onClick={requestLocation}>
        Location
    </button>
  );
}
