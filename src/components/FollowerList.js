import React from 'react';
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        console.log(this.props.followers);
        return(
            <div className="list-div">
                <h2>Followers:</h2>
                <div className="list-items">
                    {
                        this.props.followers.map(x => {
                            return <Follower followerClick={this.props.followerClick} follower={x}/>
                        })
                    }
                </div>
            </div>);
  }
}

export default FollowerList;