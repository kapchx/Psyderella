import Chat from './Chat';
import ChatInput from './ChatImput';
import axios from "axios";
import { useEffect, useState } from 'react';

const ChatDisplay = ({user,clickedUser}) => {
  const userId = user?.user_id
  const clickedUserId =clickedUser?.user_id
  const [usersMessages, setUsersMessages] = useState(null)

  const GetUsersMessages = async () => {
    try{
        const response = await axios.get('http://localhost:8000/messages', {
                params:{userId: userId, correspondingUserId: clickedUserId}
        })
        setUsersMessages(response.data)
    } catch(error) {
        console.log(error)
    }

    useEffect(()=>{
        GetUsersMessages()
    }, [usersMessages])

    console.log(usersMessages)

  }

  return (
    <>
      <Chat />
      <ChatInput />
    </>
  );
}

export default ChatDisplay;
