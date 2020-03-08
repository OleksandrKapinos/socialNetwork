import React from 'react';
import c from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogs.map( d => <DialogItem dialog={d} />);

    let  messagesEL = props.dialogsPage.messages.map( m => <Message message={m}/>);

    return (

        <div className={c.dialogs}>

            <div className={c.dialogs__items}>
                {dialogsEl}
            </div>

            <div className={c.messages}>
                {messagesEL}
            </div>

            <SendMessage newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch}/>

        </div>

    )

}

export default Dialogs;