import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Frame from "./components/Frame";
import SendField from "./components/SendField";
import {useEffect, useState} from "react";
import {setUserSession, removeUserSession, getUser, getDb} from "./Utils/common";
import Button from "./components/Button";
import firebase from "firebase"
import 'firebase/firestore'

function App() {

    const [user, setUser] = useState(null)
    const [data, setData] = useState([])

    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyDZjplAE5C19PbYDKYnF_fh8yt7XH2rjMo",
            authDomain: "womanup-5e613.firebaseapp.com",
            projectId: "womanup-5e613",
            storageBucket: "womanup-5e613.appspot.com",
            messagingSenderId: "679222137421",
            appId: "1:679222137421:web:c06a57ce06d66a93f14204",
            measurementId: "G-NKV4B4BL3R"
        })
    }

    const db = firebase.firestore()

    useEffect(()=>{
        if (db) {
        const result = db.
            collection('chat')
            .orderBy('time')
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    }));
                    setData(data)
                })
            return result;
        }
    },[])

    const sendMessage = (message) => {
        if (db){
            db.collection('chat').add({
                author: getUser(),
                message: message,
                time: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }

    const handleClick = () => {
        if (getUser()) {
            removeUserSession()
            window.location.reload()
        }
        else {
            setUserSession(user);
            window.location.reload()
        }
    }

    const handleChange = (event) => {
        setUser(event.target.value)
    }

    const chooseText = () => {
        if (getUser())
            return "Выход"
        else return "Вход"
    }

    return (
        <div className="App">
            {getUser() ? "" : <Input value={user} onChange={handleChange} placeholder={"Введите логин"}/>}
            <Button onClick={handleClick} text={chooseText()}/>
            {getUser() ? <><Frame data={data}/>
                <SendField sendFunc={sendMessage}/></> : ""}
        </div>
    );
}

export default App;
