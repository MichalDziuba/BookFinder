import './App.css';
import { Navigation } from './Components/Navigation/Navigations';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet  />
    </div>
  );
}

export default App;
