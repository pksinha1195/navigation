import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component{
  state={latitude:25,errormsg:""}
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({ latitude : position.coords.latitude })
    },
    (error)=>{this.setState({errormsg:error.message})
    });

  }
   
  render(){
    if (this.state.errormsg && !this.state.latitude){
      return(<>{this.state.errormsg}</>)
    }
    if (!this.state.errormsg && this.state.latitude){
      return(<><HemisphereDisplay latitude={this.state.latitude}/></>)
    }
  };  
} 

export default App;
