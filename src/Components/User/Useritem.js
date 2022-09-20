import axios from "axios";
import React, { Component } from "react";
import User from "./User";

class Useritem extends Component {
  state = {
    User: {}
  }
  componentDidMount() {
    const login = this.props.match.params.login;
    axios.get(`https://api.github.com/users/${login}`)
    .then((res) => {
      this.setState({
        User: res.data,
      });
    });
  }

  render() {
    const { User } = this.state;
    return (
      <div>
        <User User={User} />
      </div>
    );
  }
}

export default Useritem;
