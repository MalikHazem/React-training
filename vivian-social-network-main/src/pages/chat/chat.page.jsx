import './chat.css';
import chatsImg from '../../assets/images/chats.svg';
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();

  const navigateToFeed = () => {
    navigate({ pathname: "/feed" });
  }

  return (
    <div>
      <h1>Your Chat Messages</h1>
      <p>Here you will see all your messages&nbsp;
        <button onClick={navigateToFeed}>Go to Feed</button>
      </p>
      <img src={chatsImg} alt="chats" width={500} />
    </div>
  )
};

export default Chat;