import axios from "axios";
import React from "react";
import ReactPaginate from "react-paginate";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const url = "http://localhost:5000";
const urlimage = "http://localhost:5000/uploads";

class MostPlayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Games: [],
      searchval: "",
      perPage: 10, //10
      currentPage: 0,
      offset: 0,
      pagecount: 0,
    };
  }

  filterTags = (e) => {
    e.preventDefault();
    let searchval = e.target.value;

    let filteredTags = this.state.Games.filter((tag) => {
      return tag.title.toLowerCase().includes(searchval.toLowerCase());
    });

    this.setState({
      Games: filteredTags,
      searchval: searchval,
    });
  };

  receivedData() {
    axios
      .get(`${url}/most-popular`)
      .then((res) => {
        // this.setState({
        //   Games: res.data,
        // });
        // console.log(this.state.Games)

        let slice = res.data.games.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        // let filteredTags = slice.filter((tag) => {
        //   return tag.title
        //     .toLowerCase()
        //     .includes(this.state.searchval.toLowerCase());
        // });

        console.log(slice);

        this.setState({
          Games: slice,
          pagecount: Math.ceil(res.data.games.length / this.state.perPage),
        });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.receivedData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.Games.length !== this.state.Games.length) {
      this.receivedData();
    }
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  render() {
    const { Games } = this.state;
    return (
      <>
        {/* <div className="searchtagdiv">
          <div className="searchtag">
            <label>Search:</label>
            <input
              type="text"
              value={this.state.searchval}
              onChange={this.filterTags}
            />
          </div>
        </div>
        */}

        <div className="featured">
          <h1>MOST PLAYED</h1>

          {Games?.map((game, i) => (
            <ul key={game._id}>
              <li>
                <Link to={`/Games/view/${game.title}`}>
                  <span> {game.title} </span>
                </Link>
                <img
                  width={100}
                  height={100}
                  src={`${urlimage}/${game.gamethumb1}`}
                  alt="title"
                />
              </li>
            </ul>
          ))}
        </div>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pagecount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={this.state.perPage}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </>
    );
  }
}

export default MostPlayed;
