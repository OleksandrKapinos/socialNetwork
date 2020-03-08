import React from 'react';
import c from './FriendItem.module.scss';

const FriendItem = (props) => {


    let imgUrl = props.friend.url;

    return (

        <div className={c.friends_item}>
            <div className={c.avatar}>
                <img src={imgUrl} alt=""/>
            </div>
            <p className={c.name}>{props.friend.name}</p>
        </div>

    );
}

export default FriendItem;
