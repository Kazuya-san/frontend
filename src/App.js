import React from "react";
import './Globalcss.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './layout/Home';
import Tags from "./components/Tags/Tags";
import Games from './components/Games/Games';
import ViewGame from './components/Games/ViewGame';
import TagGames from './components/Tags/TagGames';
import AboutPage from './components/Pages/AboutPage';
import TagPage from './components/Pages/TagPage';
import Gamesall from "./components/Games/Gamesall";

class App extends React.Component {
render() {
	return (
    <>
    <div className="">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Tags" element={<Tags />} />
      <Route path="/allgames" element={<Gamesall/>} />
      <Route path="/Games" element={<Games />} />
      <Route path="/Games/view/:id" element={<ViewGame />} />

      <Route path="/Tags/:title" element={<TagGames />} />

      <Route path="/pages/aboutus" element={<AboutPage/>} />
      <Route path="/pages/tagpage" element={<TagPage/>} />


     
    </Routes>
  </BrowserRouter>
  </div>
    </>
  )
   
  
}
}

export default App;
