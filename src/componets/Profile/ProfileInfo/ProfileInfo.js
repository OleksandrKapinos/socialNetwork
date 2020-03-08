import React from "react";
import c from './ProfileInfo.module.scss';

const ProfileInfo = () =>{
    return(
        <div className={c.profile_info}>
            <div className={c.banner}>
                <img src="http://www.nickfarrell.it/wp-content/uploads/2015/05/nature.jpg" alt="banner"/>
            </div>

            <div>
                ava + descrip
            </div>
        </div>
    )
}
export default ProfileInfo;
