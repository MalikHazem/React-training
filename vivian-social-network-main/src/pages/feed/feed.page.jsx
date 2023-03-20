import React from 'react';
import './feed.css';

import useAuth from '../../hooks/auth.hook';
import usePosts from '../../hooks/posts.hook';

import Post from '../../components/post/post.component';


const Feed = (props) => {
  useAuth();
  const [filteredPosts, printPosts] = usePosts(props.posts);

  return (
    <div className="feed">
      <div className="mainContent">
        {filteredPosts.map(item => <Post key={item.postId} post={item} onLike={props.onLike} />)}
      </div>
    </div>
  )
};

export default Feed