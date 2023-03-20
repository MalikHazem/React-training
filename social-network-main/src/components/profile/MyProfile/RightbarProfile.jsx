import React, { useEffect } from "react";
import {
    Avatar,
    AvatarGroup,
    Box,
    Container,
    Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";

const RightBarProfile = () => {

    return (
        <Container fixed>
            <Box sx={{ padding: 2, background: 'white' }} boxShadow={2}>
                <Typography variant="h6" sx={{ color: grey[900], marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ color: grey[900], marginBottom: 2 }}>
                    Friend's
                    </Typography>
                    <AvatarGroup max={7}>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/6.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/7.jpg" />
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/8.jpg" />
                        <Avatar>+3</Avatar>
                    </AvatarGroup>
                </Typography>
            </Box>
        </Container>
    );
};

export default RightBarProfile;
