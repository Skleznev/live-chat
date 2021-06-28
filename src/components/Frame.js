import React from "react";
import Message from "./Message";
import "../styles/Frame.css"

const Frame = (props) => {

    const renderMessages = (message) => {
        return (
            <Message message={message} />
        )
    }

    return (
        <div className="frame">
            {props.data.map(renderMessages)}
        </div>
    )
}

export default Frame