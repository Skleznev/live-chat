import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";

const SendField = (props) => {

    const [text, setText] = useState('')

    const handleClick = (event) => {
        props.sendFunc(text)
        setText('')
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <Input value={text} onChange={handleChange} placeholder={"Написать сообщение..."} />
            <Button onClick={handleClick} text={"Отправить"}/>
        </>
    )
}

export default SendField