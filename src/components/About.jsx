import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          { ({loggedInUser}) => <h1> {loggedInUser} </h1> }
        </UserContext.Consumer>
        <h1>About Us</h1>
        <p>This page is under maintainance</p>
      </div>
    );
  }
}

export default About;