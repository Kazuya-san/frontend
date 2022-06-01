import axios from "axios";
import React from "react";
import HeaderTag from '../../layout/HeaderTag';
import Footer from '../../layout/Footer';
const url = 'http://localhost:5000';


class TagPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
            HomePage: {},
            detils:''
         
        };
      }

    componentDidMount(){

      const regex = /(<([^>]+)>)/ig;
        axios.get(`${url}/tagpage/624d3a5b700d79f079fec3b6`)
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
       
       <HeaderTag/>
       

        <div className="contentall">
          <h1>{HomePage.title}</h1>

          <p>
       {detils}
          </p>
            
        </div>

        <Footer/> 
       
        </>
    )
}
}

export default TagPage;
