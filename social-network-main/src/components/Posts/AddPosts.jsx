import React, { useEffect } from "react";
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
  Container,
  Box,
} from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const AddPosts = () => {
  const { userIn } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  return (
    <Box flex={4}>
      <Card
        className="flex-col rounded-[10px] shadow-xl xs:py-5 xs:px-5 w-full xl:w-[50rem] lg2:w-[40rem] lg:w-[35rem] md1:w-[35rem] md3:w-[45rem] sm:w-[33rem] xs2:w-[26rem] xs1:w-[21rem]  border-solid border-gray-300 border-[1px] xs:w-[28rem]"
        sx={{ marginBottom: { xs: 5 } }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={userIn?.photoURL}
              sx={{ width: 50, height: 50 }}
              aria-label="recipe"
            />
          }
          title={
            <TextField
              id="filled-hidden-label-small"
              fullWidth
              size="small"
              placeholder="What's happening?"
              sx={{
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: "none" },
                },
              }}
            />
          }
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="VideocamOutlinedIcon"
            className="sm:flex-row flex-col"
          >
            <FormControlLabel
              control={
                <Checkbox
                  icon={<VideocamOutlinedIcon />}
                  checkedIcon={<VideocamOutlinedIcon />}
                />
              }
            />
            <span className="text-base hidden xs2sm:flex">Live Video</span>
          </IconButton>
          <IconButton
            aria-label="PhotoOutlinedIcon"
            className="sm:flex-row flex-col"
          >
            <FormControlLabel
              control={
                <Checkbox
                  icon={<PhotoOutlinedIcon />}
                  checkedIcon={<PhotoOutlinedIcon />}
                />
              }
            />
            <span className="text-base hidden xs2sm:flex">Photo/Video</span>
          </IconButton>
          <IconButton
            aria-label="SentimentSatisfiedAltOutlinedIcon"
            className="sm:flex-row flex-col"
          >
            <FormControlLabel control={<SentimentSatisfiedAltOutlinedIcon />} />
            <span className="text-base hidden xs2sm:flex">Feeling</span>
          </IconButton>
          <Button
            variant="contained"
            component="label"
            sx={{ padding: " 8px 26px", borderRadius: 1 }}
          >
            Post
            {/* <input hidden accept="image/*" multiple type="file" /> */}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddPosts;
