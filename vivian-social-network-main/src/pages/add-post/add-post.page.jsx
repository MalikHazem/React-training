import React from 'react';
import './add-post.css';
import { useNavigate } from 'react-router-dom';
import NewPost from '../../components/new-post/new-post.component';
import { createPost } from '../../services/posts';
import useAuth from '../../hooks/auth.hook';

const AddPost = (props) => {
  const navigate = useNavigate();

  const user = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.body.value;
    const image = e.target.imgURL.value;
    const newPost = {
      postId: Date.now(),
      author: user.name,
      postTime: new Date().toDateString() + " " + new Date().toLocaleTimeString(),
      body: body,
      image: image,
      likesCount: 0,
      commentsCount: 0
    };

    createPost(newPost)
      .then(res => {
        if (res) {
          props.onAddPost();
          alert('Your post was added successfully!');
          navigate('/feed');
        } else {
          alert('Failed to add post, please try again later!');
        }
      });
  }

  return (
    user !== null
      ? (
        <div className="add-post">
          <h2>What's in your mind?</h2>
          <NewPost handleSubmit={handleSubmit} />
        </div>
      )
      : null
  )
}

export default AddPost;