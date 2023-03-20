import React, { useEffect } from "react";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography
} from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import { Icon } from '@iconify/react';
import { grey } from "@mui/material/colors";

const LeftBarProfile = () => {

    return (
        <Container fixed>
            <Box sx={{ padding: 2, background: 'white' }} boxShadow={2}>
                <Typography variant="h6" sx={{ color: grey[900], marginBottom: 2 }}>
                    INTRO
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <LanguageOutlinedIcon sx={{ marginRight: 2 }} />
                    MeetMax
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <PersonOutlineOutlinedIcon sx={{ marginRight: 2 }} />
                    Male
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <CakeOutlinedIcon sx={{ marginRight: 2 }} />
                    25/2/2002
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <Icon icon="ri:facebook-box-line" style={{ fontSize: '22px', marginRight: '17px' }} />
                    facebook
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <Icon icon="uit:twitter-alt" style={{ fontSize: '22px', marginRight: '17px' }} />
                    twitter
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    <Icon icon="mdi:instagram" style={{ fontSize: '22px', marginRight: '17px' }} />
                    instagram
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    500
                    Followers
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
                    500
                    Following
                </Box>

            </Box>
        </Container>
    );
};

export default LeftBarProfile;
