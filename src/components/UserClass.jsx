import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        created_at: "Dummy Date",

      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, created_at, avatar_url } = this.state.userInfo;
    return (
      <div>
        <p>Github Profile</p>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Acc Created at: {created_at}</h2>
      </div>
    );
  }
}

export default UserClass;
