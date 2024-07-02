import './App.css';
import NavBar from './NavBar';
import { WeightPanel, PostFilterCitrateDosePanel, SystemicCalciumDosePanel } from './Panel';

function App() {
  return (
    <div className="App bg-zinc-50 min-h-screen">
      <NavBar/>
      {/* <Card/> */}
      <WeightPanel/>
      <PostFilterCitrateDosePanel/>
      <SystemicCalciumDosePanel />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
