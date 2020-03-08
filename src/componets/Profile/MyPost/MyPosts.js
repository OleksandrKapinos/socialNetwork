import React from "react";
import c from './MyPosts.module.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let messagesEl = props.postsData.posts.map( m => <Post post={m}/>);
    let postText = React.createRef();

    let addPost =()=>{
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange =()=>{
        let text = postText.current.value;
        const action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            My posts
            <div className={c.class}>
                <div>
                    <textarea onChange={onPostChange} ref={ postText } value={props.postsData.newPostText}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            {messagesEl}
        </div>
    )
}

export default MyPosts;
