import './App.css';
import {Routes, Route} from 'react-router-dom';
import TeamCard from './Home/TeamCard';
import Player from './Player/Player';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PointTable from './PointTable/PointTable';
import About from './About/About';
import Match from './Matches/Match';
function App() {
  return (<>
    <Header/>
    <Routes>
    
      <Route path='/' element = {<TeamCard/> } />
      <Route path='/players/:team' element = {<Player/> } />
      <Route path='/point' element = {<PointTable/> } />
      <Route path='/about' element = {<About/> } />
      <Route path='/matches' element = {<Match/> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
