import React, { Component } from 'react'

export class SearchUser extends Component {
    state = {
        searsh: ''
    }
    hadelform = (e) => {
        this.setState({
            searsh: e.target.value
        })
    }
    SearchUsers = (e)=>{
        e.preventDefault();
        this.props.getUserSearch(this.state.searsh)
    }
  render() {
    const { searsh } = this.state;
    return (
        <form onSubmit={this.SearchUsers}>
            <div className="form-group">
                <input onChange={this.hadelform} value={searsh} placeholder='Search Users...'  id='Search' type="text" className="form-control" />
            </div>
            <button className="btn btn-danger btn-block">Search</button>
        </form>
    )
  }
}

export default SearchUser