// import logo from './logo.svg';
import './App.css';
import Village from './pages/Village';
import Home from './pages/Home';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div><Home /></div>
      <div><Village /></div>
      <footer><Nav /></footer>
    </div>
  );
}

export default App;
