import { useEffect, useState } from "react";

const useFetchData = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2022-11-23&to=2022-11-23&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          res.json().then((data) => {
            setNews(data.articles);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return news;
};
export { useFetchData };
