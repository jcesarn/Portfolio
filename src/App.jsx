import './App.css';
import HomeDescription from './components/HomeDescription.jsx';
import HomeKnowledge from './components/HomeKnowledge';

function App() {
  return (
    <div className="App">
      <div>
        <HomeDescription/>
        <HomeKnowledge/>
      </div>
    </div>
  );
}

export default App;
