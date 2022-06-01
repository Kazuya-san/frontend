import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const url = 'http://localhost:5000';

class HeaderHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
          Tags: []
         
        };
      }

    componentDidMount(){
        axios.get(`${url}/recent/tags`)
      
        .then((res)=>{
            this.setState({
                Tags: res.data,
              });
              console.log(this.state.Tags)
        })
    }


render() {
    const { Tags } = this.state;
   
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

        {Tags?.tags?.map((tag, i) => ( 
         <li key={tag._id}>
               <Link to={`/Tags/${tag.title}`}>{tag.title}</Link>  
           </li>
          
        ))}
        </ul>
        </div>

        <div className="taglink">
        <Link to="/Tags"><i className="material-icons">add</i></Link>
        </div>

        </div>
       
        </>
    )
}
}

export default HeaderHome;
