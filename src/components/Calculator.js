import React from "react";
import BoilVerdicr from "./BoilVerdicr";
export default class  Calculator extends React.Component{
    state={
        temparature: 0
      }

    render(){
        return (
            <>
         <fieldset>
      <legend>
       cvbvbbc
      </legend>
      <input value={this.state.temparature} onChange={(e)=> this.setState({temparature : e.target.value})}/>
    </fieldset> 
    <h1>{this.state.temparature}</h1>  
          
<BoilVerdicr/>         
 </>

        )
    

}}