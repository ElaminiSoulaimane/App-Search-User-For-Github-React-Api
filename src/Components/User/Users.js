import React, { Component } from "react";
import User from "./User";
import SearchUser from "./SearchUser";
import axios from "axios";

export class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  getusers = () => {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({
        users: response.data,
      });
    });
  };

  componentDidMount() {
    this.getusers();
  };

  SearchUserForGit = (data) => {

    if(data !==''){
        axios.get(`https://api.github.com/search/users?q=${data}`)
        .then(response => {
         this.setState({
          users:response.data.items
         })
        })
    }
  }
  render() {
    return (
      <div>
        <div className="row my-2">
          <div className="col-md-12">
              <SearchUser getUserSearch={this.SearchUserForGit} />
          </div>
        </div>
        <div className="row">
          {this.state.users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default users;
