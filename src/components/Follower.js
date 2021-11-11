import React from 'react';

class Follower extends React.Component {

    handleClick = () => {
        this.props.followerClick(this.props.follower.login)
    }
  
  render() {
    return(
    <div onClick={this.handleClick} className="follower-div">
        <img src={this.props.follower.avatar_url} alt="avatar" />
        <p>{this.props.follower.login}</p>
    </div>);
  }
}

export default Follower;