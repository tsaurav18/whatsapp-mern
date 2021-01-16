
import React,{useEffect, useState} from 'react';
import './App.css';
import ChatBar from './components/ChatBar';
import Sidebar from './components/Sidebar';
import Pusher from "pusher-js"
import axios from "./axios"
function App() {
const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync').then(response=>{
      setMessages(response.data)
    console.log(response.data);
    console.log(messages)
    })
   
  }, [])
  useEffect(() => {
   
    const pusher = new Pusher('7d14c4be60c90ae6aa4f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(data));
        setMessages([...messages, newMessage])
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  }, [messages])
  return (
    <div className="app">
     <div className="app__body">
     <Sidebar/>
    <ChatBar messages={messages}/>
     </div>
     
    </div>
  );
}

export default App;
