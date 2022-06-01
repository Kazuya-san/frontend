import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Iframe from "react-iframe";
import axios from "axios";

import HeaderGame from "../../layout/HeaderGame";
import Footer from "../../layout/Footer";
import RecentGrid from "./RecentGrid";

import MostPlayed from "./MostPlayed";

let url = "http://localhost:5000";

class ViewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagstitles: {},
    };
  }

  componentDidMount() {
    const id = this.props.params.id;
    axios
      .post(`${url}/update-count/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios.get(`${url}/gameus/${id}`).then((res) => {
      this.setState({ tagstitles: res.data });
      // console.log(this.state.tagstitles + "gameiddata")
      //  console.log(this.state.tagstitles + "gameiddata")

      let gamesinlocal = localStorage.getItem("games")
        ? JSON.parse(localStorage.getItem("games"))
        : [];
      console.log(gamesinlocal);
      if (!gamesinlocal.includes(res.data._id)) {
        gamesinlocal.push(res.data._id);
      }
      localStorage.setItem("games", JSON.stringify(gamesinlocal));
    });
  }

  render() {
    const { tagstitles } = this.state;

    return (
      <>
        <HeaderGame />

        <div className="gamebox">
          <div className="viewleft">
            <Iframe
              url={tagstitles.gamefile}
              width="900px"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
          <div className="viewright">
            <RecentGrid />
          </div>
        </div>

        <div className="playedgames">
          <MostPlayed />
        </div>

        <div className="gamedetails">
          <h1>{tagstitles.title}</h1>
          <h3>{tagstitles.metatitle}</h3>
          <p>{tagstitles.description}</p>
        </div>

        <Footer />
      </>
    );
  }
}

export default (props) => (
  <ViewGame {...props} params={useParams()} navigate={useNavigate()} />
);
