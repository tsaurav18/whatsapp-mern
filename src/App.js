
import React,{useEffect, useState} from 'react';
import './App.css';
import ChatBar from './components/ChatBar';
import Sidebar from './components/Sidebar';
import Pusher from "pusher-js"
import axios from "./axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Navbar from './components/Navbar';


function App() {
  
  const [{user}, dispatch] = useStateValue();
const [messages, setMessages] = useState([])


useEffect(() => {
   
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {

      // the user just logged in / the user was logged in
console.log(authUser)
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);


  useEffect(() => {
    axios.get('/messages/sync').then(response=>{
      setMessages(response.data)
    console.log(response.data);
   
    })
   
  }, [])
  useEffect(() => {
   
    const pusher = new Pusher('7d14c4be60c90ae6aa4f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
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
      <Router>
        <Switch>
         <Route path="/" exact component={Login}>

          </Route>
          <Route path="/home">
            <Navbar/> 
            <Sidebar/>
         <ChatBar messages={messages}/>
          </Route>
        </Switch>
      </Router>

     </div>
     
    </div>
  );
}

export default App;
