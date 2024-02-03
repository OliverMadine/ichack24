import logo from './logo.svg';
import './App.css';
import MapComponent from './Map';
import AlternativeSources from "./Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex", flexDirection: "inline"}}>
        <div style={{width: "1000px"}}>
        <MapComponent/>
        </div>
        <AlternativeSources/>
        </div>
      </header>
    </div>
  );
}

export default App;
