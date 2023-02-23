import React, { Component } from "react";
import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext'; // Context

class Home extends Component {

  static contextType = userContext; // Context from JS with classes

  constructor(props) {
    super(props)
  
    this.username = React.createRef();

    this.state = {
      username:""
    }
  }

  sendName = () => {
    //***CONSUMER***
    const {login} = this.context; // Consumes context from JS
    
    login(this.state.username);// Send name by context. 
    
    // Empty input + state
    this.username.current.value = "";
    this.setState({ username: "" });
  }

  handleChange = () => {
    const username = this.username.current.value; // Read prop by ref
    this.setState({ username });
  }

  render() {
    
    return <div>
      <div>
          <h1>Introduce your name</h1>
          <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Name" />
          {<Button variant="contained" onClick={this.sendName}>Login</Button>}
        </div>
    </div>;
  }
}

export default Home;
