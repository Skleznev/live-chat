import React, {useState} from "react";
import "../styles/Message.css"
import {getUser} from "../Utils/common";

const Message = (props) => {

    const getTime = (seconds) => {
        const date = new Date(seconds * 1000)
        return date.getHours() + ":" + date.getMinutes()
    }

    const chooseSide = () => {
        if (props.message.author === getUser())
            return "message message--own"
        else return "message message--another"
    }

    return (
        <div className={chooseSide()}>
            <a1>{props.message.author}</a1>
            <p>
                <a2>{props.message.message}</a2>
            </p>
            <a3>{props.message.time ? getTime(props.message.time.seconds) : ""}</a3>
        </div>
    )
}

export default Message