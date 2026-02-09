import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is an about page</h1>
        <hr />
        <UserClass
          name={"Mokarram Shahban"}
          designation={"MERN Stack Developer"}
        />
      </div>
    );
  }
}

export default About;