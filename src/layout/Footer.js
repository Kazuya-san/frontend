import axios from "axios";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


class Featured extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
       
         
        };
      }

   


render() {

	return (
        <>
       
       
  <div className="Footer">
      <ul>
          <li><Link to="/pages/aboutus">About</Link></li>
          <li><Link to="/pages/tagpage">Tags</Link></li>
          <li><Link to="/pages/privacy">Privacy</Link></li>
          <li><Link to="/pages/newgame">New Games</Link></li>
          <li><Link to="/pages/contact">Contact</Link></li>
      </ul>
  </div>
       
       
        </>
    )
}
}

export default Featured;
