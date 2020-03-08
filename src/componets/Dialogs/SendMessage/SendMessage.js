import React from 'react';
import c from "./SendMessage.module.scss"
import {sendMessageActionCreator, updateMessageText} from "../../../redux/state";

const SendMessage = (props) => {

    let textMessage = React.createRef();

    let sendMessage = () => {
        const action = sendMessageActionCreator();
        props.dispatch(action)
    };

    let onMessageChange =()=>{
        let text = textMessage.current.value;
        const action = updateMessageText(text);
        props.dispatch(action)
    };

    return (

        <div className={c.textBox}>
            <textarea onChange={onMessageChange} ref={textMessage} value={props.newMessageText}></textarea>
            <button onClick={sendMessage}>Send text</button>
        </div>

    )

}

export default SendMessage;