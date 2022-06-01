import axios from "axios";
import React from "react";
import Carousel from "react-grid-carousel";
const url = "http://localhost:5000";
const urlimage = "http://localhost:5000/uploads";

class ContinewPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Games: [],
    };
  }

  componentDidMount() {
    let games = JSON.parse(localStorage.getItem("games"));
    let gamesState = [];
    games?.forEach((gameid) => {
      //make the api call to get the game by id;
      axios.get(`${url}/gameu/${gameid}`).then((res) => {
        console.log(res.data);
        // games.push(res.data)
        gamesState.push(res.data);
        this.setState({
          Games: gamesState.length > 0 ? gamesState : [],
        });
      });
    });
  }

  render() {
    const { Games } = this.state;
    console.log(Games);
    return (
      <>
        <div className="featured">
          <h1>Continew Play</h1>

          <Carousel cols={8} rows={1} gap={1} loop>
            {Games.map((game, i) => (
              <Carousel.Item>
                <div className="circlein">
                  <span className="circleinspan">{game.title}</span>
                  <img width="100%" src={`${urlimage}/${game.gamethumb1}`} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}

export default ContinewPlay;
