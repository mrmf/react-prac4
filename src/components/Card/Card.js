import React, { Component } from "react";
import styles from './Card.module.css'; 

export  class Card extends Component {
  constructor(props){
    super(props);
    let item = props.item;
    this.state = {
      counter:0,
      CardDetail:item,
    };
    this.state.CardDetail.Count = 10;
    this.HandleDec = this.HandleDec.bind(this);
    this.HandleInc = this.HandleInc.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
  }
  componentDidMount(){

  }
  HandleDec(){
    this.setState((state,props) => (
      {
        counter : state.counter - 1,
        //CardDetail.Count : state.CardDetail.Count - 1,
       
      })); 
  }
  HandleInc(){
    this.setState((state,props) => (
      {
        counter : state.counter + 1,
        //Count : state.CardDetail.Count + 1,
       
      })); 
  }
  onTodoChange(value){
    this.setState({
         Count: value
    });
}
render() {
    return (
      <div className="border-bottom">
      <div key={this.state.CardDetail.id} className={styles.container}>
                    <div className="col-md-4">   
                        <img src={this.state.CardDetail.image} alt="" height="100" />                                          
                    </div>
                    <div className="col-md-4">{this.state.CardDetail.title} 
                      <ul>
                              <li>Price: ${this.state.CardDetail.price}</li>
                      </ul>
                    </div>    
                    <div className="row">
                
                        <button defaultValue="+" onClick={this.HandleInc} className="btn btn-danger h-50 align-center">+</button>
                        <input
                          type="text" value={this.state.counter} onChange={e => this.onTodoChange(e.target.value)}
                          className="form-control text-center col-4"
                        />
                        <button  defaultValue="-" onClick={this.HandleDec} className="btn btn-primary h-50">-</button>
            
                    </div>
                     <div className="col-2 text-center">                            
                            <input type="button" value="Add to Bucket" />
                     </div>
                      <br />
     </div>
     </div>
    );
  }
}
