import axios from "axios";
import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const url = "http://localhost:5000";
const urlimage = "http://localhost:5000/uploads";

class RecentGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    axios.get(`${url}/game/Right`).then((res) => {
      console.log(res);
      this.setState({
        games: res.data,
      });
    });
  }

  render() {
    const { games } = this.state;
    console.log(this.state.games, "newdata21");

    return (
      <>
        <div className="viewright1">
          {games?.games?.length > 0 &&
            games?.games?.map((game, i) => (
              <ul key={game._id}>
                <li>
                  goku
                  <Link to={`/Games/view/${game._id}`}>
                    <span> {game.title} </span>
                    <img
                      width={100}
                      height={100}
                      src={`${urlimage}/${game.gamethumb1}`}
                      alt="title"
                    />
                  </Link>
                </li>
              </ul>
            ))}
        </div>
      </>
    );
  }
}

export default RecentGrid;
