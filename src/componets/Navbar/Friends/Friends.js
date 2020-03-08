import React from 'react';
import c from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friends = props.friendsList.friends.map(f => <FriendItem friend={f}/>)
    return (

        <div className={c.friends_list}>
            <h3>Friends</h3>
            {friends}
        </div>

    );
}

export default Friends;
