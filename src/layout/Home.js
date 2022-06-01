import React from "react";
import HeaderTag from "./HeaderTag";
import Footer from "./Footer";
import Featured from "../components/Games/Featured";
import MostPlayed from "../components/Games/MostPlayed";
import HomeTag from "../components/Games/HomeTag";
import Recentlyadded from "../components/Games/RecentAdded";
import Tags from "../components/Tags/Tags";
import ContinewPlay from "../components/Games/ContinewPlay";

import Homepage from "../components/Pages/Homepage";
class Home extends React.Component {
  render() {
    return (
      <>
        <HeaderTag />
        <Recentlyadded />
        <Featured />
        <ContinewPlay />
        <MostPlayed />
        <HomeTag />
        <Homepage />
        <Footer />
      </>
    );
  }
}

export default Home;
