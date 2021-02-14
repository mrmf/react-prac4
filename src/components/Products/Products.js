import React , { Component } from "react";
import {Cardlist} from "../CardList/CardList"
export default class Products extends Component{
  constructor(props){
    super(props);
    this.state = {
      Products: [],
      Count:[],
    };
  }
  componentDidMount(){
    fetch(`https://fakestoreapi.com/products/`)
    .then((res) => res.json())
    .then((result)=> this.setState({Products : result.concat(this.state.Count)}));
    
  
  }
  render() {
    return( 
      <div className="row">
      {
          <div className="col-md-8">
           <Cardlist items={this.state.Products} />
          </div>
        
      }
      </div>
       );
     }
}
