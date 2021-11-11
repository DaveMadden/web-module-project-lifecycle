import React from 'react';
import User from "./components/User";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    input: "davemadden",
    user: {},
    followers: [],
  };

  componentDidMount(){
    console.log('did mount runs')
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp=> {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
  }
  componentDidUpdate(prevProps, prevState){
    console.log('did update runs')
    if (this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
      .then(resp=> {
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
      .finally(
        this.setState({
          ...this.state,
          input: ""
        })
      )
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp=> {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
  }

  followerClick = (followerID) => {
    console.log("follower click", followerID);
    axios.get(`https://api.github.com/users/${followerID}`)
      .then(resp=> {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
  }

  render() {
    return(
    <div className="main-div">
      <h1>Github Card</h1>
      <form name="searchForm" onSubmit={this.handleSubmit}>
        <input placeholder="search github users"value={this.state.input} type="text" name="searchText" onChange={this.handleChange}/>
        <button>search</button>
      </form>
      <User user={this.state.user} followers={this.state.followers} followerClick={this.followerClick}/>
    </div>);
  }
}

export default App;
