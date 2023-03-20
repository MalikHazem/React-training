import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase.config';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../firebase.config';
import { UserAuth } from '../../../context/AuthContext';
import PopupAddPosts from '../../Posts/PopupAddPosts';
import Post from '../../Posts/Post';

const FeedProfile = ({user}) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      const postData = snapshot.val();
      
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

  function sortByDate(a, b) {
    if (a.date > b.date) {
        return 1;
    }
    if (a.date < b.date) {
        return -1;
    }
    return 0;
}

  const filteredPosts = data.filter((post) => post.email === user?.email);

  const sorted = filteredPosts.sort(sortByDate);

  return (
    <Box className="pt-10 flex items-center justify-center flex-wrap gap-5 mx-8 w-full lg2:ml-[0rem] xl:ml-[18rem] lg:mr-[30rem] flex-col xl2:w-[60] xl:w-[50rem] lg2:w-[10rem] lg:w-[45rem] lg:ml-10 md:w-[40rem]">
      <PopupAddPosts postData={data} />
      <Box>
        {sorted.map((item) => {
          return <Post item={item} />;
        })}
      </Box>
    </Box>
  );
}

export default FeedProfile
