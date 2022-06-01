import axios from "axios";
import React from "react";

const url = 'http://localhost:5000';


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
            HomePage: {},
            detils:''
         
        };
      }

    componentDidMount(){

      const regex = /(<([^>]+)>)/ig;
        axios.get(`${url}/homepage/62485e7da8c0ee2a52325338`)
        .then((res)=>{
            this.setState({ HomePage: res.data });
            this.setState({ detils : res.data.des.replace(regex, '') });
             
        })
    }


render() {
  const { HomePage } = this.state;
  const { detils } = this.state;
 	return (
        <>
       
       
       

        <div className="Homecontent">
          <h1>{HomePage.title}</h1>

          <p>
       {detils}
          </p>
            
        </div>

       
       
        </>
    )
}
}

export default Homepage;
