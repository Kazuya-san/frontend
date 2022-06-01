import axios from "axios";
import React from "react";
import Carousel from "react-grid-carousel";
const url = "http://localhost:5000";
const urlimage = "http://localhost:5000/uploads";

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Games: [],
    };
  }

  componentDidMount() {
    axios.get(`${url}/game/Right`).then((res) => {
      this.setState({
        Games: res.data,
      });
      // console.log(this.state.Games)
    });
  }

  render() {
    const { Games } = this.state;
    console.log(Games.games);
    console.log(this.state.Games, "Featured Games data");
    return (
      <>
        <div className="featured">
          <h1>Featured Games</h1>
          <Carousel cols={8} rows={1} gap={1} loop>
            {Games?.games?.map((game, i) => (
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

export default Featured;
