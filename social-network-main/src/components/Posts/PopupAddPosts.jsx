import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddPosts from './AddPosts';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { db } from '../../firebase.config';
import { storage } from '../../firebase.config';
import { ref, set, } from "firebase/database";
import { uploadBytes, ref as sRef } from 'firebase/storage';
import { v4 } from 'uuid';
import { UserAuth } from '../../context/AuthContext';
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  Checkbox,
  IconButton,
  FormControlLabel,
  TextField,
  Button,
  Box,
} from "@mui/material";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// const [open, setOpen] = useState(true);


// const handleClick = () => {
//     setOpen(false);
// };
const PopupAddPosts = (props) => {
  const { userIn } = UserAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [imageAsFile, setImageAsFile] = useState('');

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  const handleChange = e => {
    
    if (e.target.files[0]) {
      const image = e.target.files[0]
      setImageAsFile(() => (image));
    }
  }

  const addPosts = () => {
    const mountainImagesRef = sRef(storage, `posts/${imageAsFile.name + v4()}`);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    // const ID = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}${current.getHours()}${current.getMinutes()}${current.getSeconds()}`;
    const url = 'https://firebasestorage.googleapis.com/v0/b/' + mountainImagesRef.bucket + '/o/posts%2F' + mountainImagesRef.name + '?alt=media&token=03058de8-fdd8-412d-9ecd-1a7ee0f2cfcd'

    uploadBytes(mountainImagesRef, imageAsFile).then(() => {
      console.log('image upload')
    });

    set(ref(db, 'posts/' + props.postData.length), {
      id: props.postData.length,
      email: userIn?.email,
      date: date,
      content: content,
      image: url,
      countLike: 0,
      countComment: 0,
    });
  }

  return (
    <div>
      <Popup Popup trigger={<button> <AddPosts /></button>} position="center" modal nested >
        {close => (
          <div className="modal">
            <Card>
              <div>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", padding: '0 7px' }}>
                  <Typography variant="h6" gutterBottom>
                    Create post
                  </Typography>
                  <Box className='flex' sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle1">
                      visible for
                    </Typography>
                    <List>
                      <ListItemButton>
                        <ListItemText primary="Friend" />
                      </ListItemButton>
                      <Collapse timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                    <IconButton aria-label="HighlightOffIcon" onClick={() => { close() }}>
                      <FormControlLabel
                        control={
                          <HighlightOffIcon sx={{ fontSize: '27px', }} />
                        }
                      />
                    </IconButton>
                  </Box>
                </CardActions>
                <CardHeader
                  sx={{ display: 'flex', alignItems: 'flex-start' }}
                  avatar={
                    <Avatar
                      src={userIn?.photoURL}
                      sx={{ width: 50, height: 50 }}
                      aria-label="recipe"
                    />
                  }
                  title={<TextField
                    id="filled-hidden-label-small"
                    name='content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    size="small"
                    placeholder="What's happening?"
                    sx={{
                      backgroundColor: "#f1f1f1",
                      borderRadius: '10px',
                      height: '120px',
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { border: "none", },
                      },
                    }}
                  />}
                />
              </div>
              <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between", padding: '0 15px 0 7px' }}>
                <Box>
                  <IconButton aria-label="VideocamOutlinedIcon">
                    <FormControlLabel
                      label="Live Video"
                      control={
                        <Checkbox
                          icon={<VideocamOutlinedIcon />}
                          checkedIcon={<VideocamOutlinedIcon />}
                        />
                      }
                    />
                  </IconButton>
                  <IconButton color="primary" aria-label="upload picture" component="label" sx={{ color: '#888' }}>
                    <input hidden accept="image/*" name='imgPost' type="file" onChange={handleChange} />
                    <ImageOutlinedIcon />
                    <Typography variant="body2" gutterBottom>
                      Photo/Video
                    </Typography>
                  </IconButton>
                  {/* <IconButton aria-label="PhotoOutlinedIcon">
              <FormControlLabel
                label="Photo/Video"
                control={
                  <Checkbox
                    icon={<PhotoOutlinedIcon />}
                    checkedIcon={<PhotoOutlinedIcon />}
                  />
                }
              />
            </IconButton> */}
                  <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon">
                    <FormControlLabel
                      label="Feeling"
                      control={
                        <SentimentSatisfiedAltOutlinedIcon />
                      }
                    />
                  </IconButton>
                </Box>
                <Button variant="contained" component="label" sx={{ padding: " 8px 26px", borderRadius: 1 }} onClick={addPosts}>
                  Post
                  {/* <input hidden accept="image/*" multiple type="file" /> */}
                </Button>
              </CardActions>
            </Card>
          </div>
        )}
      </Popup >
    </div>
  )
};

export default PopupAddPosts;