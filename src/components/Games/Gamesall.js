import axios from "axios";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
import HeaderTag from '../../layout/HeaderTag';
import Footer from '../../layout/Footer';
const url = 'http://localhost:5000';


class Gamesall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          allTitles: [],
            searchval: "",
         
        };
      }


      filterTags = (e) => {
        e.preventDefault();
        let searchval = e.target.value;
    
        let filteredTags = this.state.allTitles.filter((tag) => {
          return tag.title.toLowerCase().includes(searchval.toLowerCase());
        });
    
        this.setState({
          allTitles: filteredTags,
          searchval: searchval,
        });
      };

      componentDidMount() {
        axios
          .get(`${url}/gameu`)
          .then((res) => {
            // if (res.status === 200 && res.data.length > 0) {
            //   let filteredTags = res.data.filter((tag) => {
            //     return tag.title
            //       .toLowerCase()
            //       .includes(this.state.searchval.toLowerCase());
            //   });
            //   this.setState({
            //     allTitles: filteredTags,
            //   });
            // }
            this.setState({
              allTitles: res.data,
            });
          })
          .catch((err) => console.log(err));
      }


        //re render when allTitles changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.allTitles.length !== this.state.allTitles.length) {
      axios
        .get(`${url}/gameu`)
        .then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            let filteredTags = res.data.filter((tag) => {
              return tag.title
                .toLowerCase()
                .includes(this.state.searchval.toLowerCase());
            });

        

          

            this.setState({
              allTitles: filteredTags,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }


render() {
  const { allTitles } = this.state;
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
        </div> */}

        <HeaderTag/>
       
       
       

        <div className="tagslists">
          <h1>All Games</h1>
          <ul>
          {allTitles?.games?.map((tag, i) => (
             
                

                <li>
                <Link to={`/Games/view/${tag._id}`}>
                    <span className="span">  {tag.title} </span>
                </Link>   
                  <img
                  className="tagimage1"
                    width={100}
                    height={100}
                    src={`${url}/uploads/${tag.gamethumb1}`}
                    alt="title"
                  />
                </li>

               

               

               
             
            ))}
             </ul>
        </div>

       <Footer/>
       
        </>
    )
}
}

export default Gamesall;
