import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Feed from './pages/feed/feed.page';
import Chat from './pages/chat/chat.page';
import Header from './components/header/header.component';
import NotFound from './pages/not-found/not-found.page';
import ViewPost from './pages/view-post/view-post.page';
import AddPost from './pages/add-post/add-post.page';
import Login from './pages/login/login.page';

import UserProvider from './components/providers/UserProvider.component';
import { fetchPosts } from './services/posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => getPosts(), []);

  const onLike = (postId) => {
    setPosts([...posts.map(post => {
      if (post.postId === postId) {
        return { ...post, likesCount: post.likesCount + 1 }
      } else {
        return post;
      }
    })]);
  }

  const getPosts = () => {
    // Fetch the real data from the internet
    fetchPosts().then(result => {
      setPosts(result);
    });
  }

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path="feed" element={<Feed posts={posts} onLike={onLike} />} />
            <Route path="feed/:id" element={<ViewPost />} />
            <Route path="chat" element={<Chat />} />
            <Route path="add" element={<AddPost onAddPost={getPosts} />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
