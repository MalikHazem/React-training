import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ newItem }) => {
  const [title, setTitle] = useState(newItem.title);

  const [titleToggle, setTitleToggle] = useState(true);

  const HandelReadMore = () => {
    setTitleToggle(!titleToggle);
    if (titleToggle) {
      setTitle(title.slice(0, 50));
    } else {
      setTitle(newItem.title);
    }
  };
  return (
    <div>
      <Box>
        <Box className="mt-5">
          <hr />
          <Typography variant="h6" className="mt-2">
            Author: {newItem.author}
          </Typography>
          <Typography variant="body2">
            {titleToggle ? newItem.title.slice(0, 50) : newItem.title}
            <Typography
              variant="button"
              className="font-bold cursor-pointer hover:underline"
              onClick={HandelReadMore}
            >
              {titleToggle ? "... Read More" : "  Read Less"}
            </Typography>
          </Typography>
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href={`${newItem.url}`}
          >
            {newItem.url}
          </a>
          <Box className="flex flex-col mb-3">
            <a href={newItem.urlToImage} target="_blank">
              <img
                src={`${newItem.urlToImage}`}
                alt="photo_News"
                className="rounded-lg my-2"
              />
            </a>
            <Typography variant="body2">
              <Typography
                variant="button"
                className="font-bold cursor-pointer hover:underline"
              >
                Posted In:
              </Typography>{" "}
              {newItem.publishedAt}
            </Typography>
          </Box>
          <hr />
        </Box>
      </Box>
    </div>
  );
};

export default NewsItem;
