import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

const usePosts = (posts) => {
  const [params] = useSearchParams();

  const filteredPosts = useMemo(() => {
    const queryFromURL = params.get('query') || '';
    const searchQuery = queryFromURL.toLowerCase();

    return posts.filter((post => {
      let isMatching = false;
      isMatching = (
        post.body.toLowerCase().includes(searchQuery)
        || post.author.toLowerCase().includes(searchQuery)
      );
      return isMatching;
    }));
  }, [params, posts]);

  const printPosts = () => {
    console.log(posts);
  }

  // return { filteredPosts, printPosts };
  return [filteredPosts, printPosts];
};

export default usePosts;