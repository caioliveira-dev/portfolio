import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import SideMenu from './components/SideMenu'
import "./App.scss";
import {useState} from 'react';


function App() {
  const [menuOpen,setMenuOpen] = useState(true);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contato />
      </div>
    </div>
  );
}

export default App;
