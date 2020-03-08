import React from "react";
import c from './Post.module.css';

const Post = (props) => {

    return (
        <div className={c.item}>
            <div className={c.ava_box}>
                <img src="https://kino-teatr.ua/public/main/news/article_3753.jpg" alt="ava"/>
            </div>
            <div className={c.post_text}>
                <p>
                    {props.post.message}
                </p>
            </div>
            <div className={c.like}>like:{props.post.likes}</div>

        </div>
    )
}
export default Post;
