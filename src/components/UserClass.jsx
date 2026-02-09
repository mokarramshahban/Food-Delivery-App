import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, designation } = this.props;
    const { count } = this.state;
    return (
      <div>
        <p>Developer Details</p>
        <h1>Name: {name}</h1>
        <h2>Designation: {designation}</h2>
        <hr />
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click here to add 1
        </button>
      </div>
    );
  }
}

export default UserClass;