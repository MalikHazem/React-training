import React, { useContext } from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';
import { Bell, Chats, PlusCircle, SignOut } from 'phosphor-react';
import { Link, useSearchParams } from 'react-router-dom';
import userImg from '../../assets/images/user.png';
import { UserContext } from '../providers/UserProvider.component';

const Header = (props) => {
  const [params, setParams] = useSearchParams();
  const userConsumer = useContext(UserContext); // 3

  const handleSearch = (e) => {
    const newParams = new URLSearchParams(params);
    if (e.target.value) {
      newParams.set('query', e.target.value);
    } else {
      newParams.delete('query');
    }
    setParams(newParams);
  }

  return (
    <div className="header">
      <Link to="/feed"><img src={logo} alt="logo" height="50px" /></Link>
      <div className="actions">
        <input
          value={params.get('query') || ''}
          onChange={handleSearch}
          className="search"
          type="search"
          name="search"
        />
        <Link className="icon-button" title="Your Notifications"><Bell size={24} weight="bold" /></Link>
        <Link to="/chat" className="icon-button" title="Your Chats"><Chats size={24} weight="bold" /></Link>
        <Link to="/add" className="icon-button" title="New Post">
          <PlusCircle size={24} weight="bold" />
        </Link>
      </div>
      {
        userConsumer.user !== null    // 4       
          ? <div className="avatar">
            <img src={userImg} alt="user avatar" height={40} />
            {userConsumer.user.fullName}

            <button
              className="icon-button"
              onClick={userConsumer.handleLogout}
              title="Logout"
            >
              <SignOut size={24} weight="bold" />
            </button>
          </div>
          : <div></div>
      }
    </div>
  )
}

export default Header;