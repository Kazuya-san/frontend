import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const url = 'http://localhost:5000';
const urlimage = 'http://localhost:5000/uploads';
class HeaderGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          Tags: []
         
        };
      }

    componentDidMount(){
        axios.get(`${url}/recent/games`)
      
        .then((res)=>{
            this.setState({
                Tags: res.data,
              });
              console.log(this.state.Tags)
        })
    }


render() {
    const { Tags } = this.state;
    console.log(this.state.Tags, "ehllo")
	return (
        <>

      

        <div className="headerlayout">
            <div className="logo">
                <img src={logo} width="130" />
            </div>
        {/* <div className="Navgations">
       
            <Link to="/Games" className="m1"><i className="material-icons">apps</i></Link>
            <Link to="/Games" className="m2"><i className="material-icons">keyboard</i></Link>
            <Link to="/Games" className="m3"><i className="material-icons">keyboard</i></Link>
        </div> */}

        <div className="tagsmenu">
        <ul>
        {Tags?.games?.map((tag, i) => ( 
            <li key={tag._id}>
               <img width="60px"  src={`${urlimage}/${tag.gamethumb1}`} />
           </li>
        ))}
        </ul>
        </div>

        <div className="taglink">
        <Link to="/allgames"><i className="material-icons">chevron_right</i></Link>
        </div>

        </div>
       
        </>
    )
}
}

export default HeaderGame;
