import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-grid-carousel";
const url = "http://localhost:5000";
const urlimage = "http://localhost:5000/uploads";

class TagGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Games: [],
    };
  }

  componentDidMount() {
    const title = this.props.params.title;
    console.log(this.props);
    axios.get(`${url}/games/${title}`).then((res) => {
      this.setState({
        Games: res.data,
      });
      // console.log(this.state.Games)
    });
  }

  render() {
    const { Games } = this.state;
    console.log(Games.games);
    console.log(this.state.Games, "Featured Games 4545");
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

export default (props) => <TagGames {...props} params={useParams()} />;
