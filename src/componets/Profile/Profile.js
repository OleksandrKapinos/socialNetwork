import React from "react";
import c from './Profile.module.scss';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{

    return(
        <div className={c.profile_content} >
            <ProfileInfo/>
            <MyPosts postsData={props.state}  dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
