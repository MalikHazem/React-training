import React from "react";
import {
  Container,
  Stack
} from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import InformationProfile from "./InformationProfile";
import FeedProfile from "./FeedProfile";
import { grey } from "@mui/material/colors";
import LeftBarProfile from "./LeftbarProfile";
import { Box } from "@mui/system";
import RightBarProfile from "./RightbarProfile";
import { useSearchParams } from "react-router-dom";

const FriendsProfile = ({email}) => {
  const [params, setParams] = useSearchParams();
  const newParams = new URLSearchParams(params);
  console.log(newParams);
  const { usersList } = UserAuth();

  const userProfile = usersList?.find(u => u.email === email)
  console.log(userProfile);
  console.log('friendsProfile');

  // const userProfile = usersList.find(u => u.email === userIn?.email)

  return (
    <Container className="ml-[12rem] w-[85%]">
      <InformationProfile user={userProfile} />
        <Stack
          direction="row"
          paddingTop={3}
          sx={{ backgroundColor: grey[200] }}
          className="ml-[2rem]"
        >
          <Box>
            <LeftBarProfile />
          </Box>
          <Box>
            <RightBarProfile />
            <FeedProfile user={userProfile}/>
          </Box>
        </Stack>
    </Container>
  );
};

export default FriendsProfile;
