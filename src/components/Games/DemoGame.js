import axios from "axios";
import React from "react";
import Carousel from 'react-grid-carousel'
const url = 'http://localhost:5000';
const urlimage = 'http://localhost:5000/uploads';

class DemoGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          Games: []
         
        };
      }

    componentDidMount(){
        axios.get(`${url}/gameu`)
        .then((res)=>{
            this.setState({
              Games: res.data,
              });
              // console.log(this.state.Games)
        })
    }


render() {
  const { Games } = this.state;
  console.log(this.state.Games, "Featured Games data")
	return (
        <>
       
        <div className="featured">
          <h1>Game filter demo</h1>
        <ul>
            
     {this.state.Games.map((game, i) => (

      <li>
        <div className="circlein">
        <span className="circleinspan">{game.title}</span>
        <img width="100%"  src={`${urlimage}/${game.gamethumb1}`} />
        </div>
        </li>>
      
      ))}

      
</ul>
            
        </div>

       
       
        </>
    )
}
}

export default DemoGame;
