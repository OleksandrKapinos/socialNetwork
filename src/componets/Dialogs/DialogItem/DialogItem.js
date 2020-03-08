import React from 'react';
import c from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let Path = '/dialogs/' + props.dialog.id;
    return (
        <div className={c.dialog}>
            <NavLink to={Path}>
                {props.dialog.name}
            </NavLink>
        </div>

    )
}

export default DialogItem;