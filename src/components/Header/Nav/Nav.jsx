import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { userContext } from '../../../context/userContext';

class Nav extends Component {
  render() {
    return (
      <nav className={"nav-bar"}>
        <Link to="/">Home</Link>
        <Link to="/form">Write News</Link>
        <Link to="/list" >List of News</Link>
        <userContext.Consumer>
          {({ logout, user }) => user !== "Guess" ?
            <span>Hello, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
            : <span>Hello, {user} </span>
          }
        </userContext.Consumer>
      </nav>
    )
  }
}

export default Nav;
