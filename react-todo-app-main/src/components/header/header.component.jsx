import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="header">
      <h1>R ToDo App</h1>
      <nav>
        <Link
          className={location.pathname === '/add' ? 'active' : ''}
          to="/add"
        >
          Add Item
        </Link>
        <Link
          className={location.pathname.includes('view') ? 'active' : ''}
          to="/view"
        >
          View Items
        </Link>
      </nav>
    </div>
  )
}

export default Header