import axios from "axios";
import React from "react";
const url = 'http://localhost:5000';
const urlimage = 'http://localhost:5000/uploads';

class Recentlyadded extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          Games: []
         
        };
      }

    componentDidMount(){
        axios.get(`${url}/recent/games`)
        .then((res)=>{
            this.setState({
              Games: res.data,
              });
              // console.log(this.state.Games)
        })
    }


render() {
  const { Games } = this.state;
  // console.log(Games, "limitdata")
	return (
        <>
       
        <div className="featured">
          <h1>Recently Added</h1>
        
        <ul>  
          {Games?.games?.map((game, i) => (
           
             <li><img width="100%"  src={`${urlimage}/${game.gamethumb1}`} /></li>
          ))}
        </ul>  
            
        </div>

       
       
        </>
    )
}
}

export default Recentlyadded;
