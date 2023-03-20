import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Button,
    Typography,
    Box,
    Container
} from "@mui/material";
import { green, grey } from '@mui/material/colors';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const InformationProfile = ({ user }) => {
    console.log(user);
    return (
        <Container fixed>
            <Card flex={4} sx={{ marginBottom: { xs: 5 }, marginRight: { xs: 3 }, display: 'flex', alignContent: 'start', flexDirection: 'column', position: 'relative' }} p={2}>
                <CardMedia sx={{ height: '400px' }}
                    component="img"
                    height="1000"
                    image={user?.imageProfile}
                    alt="Paella dish"
                />
                <CardHeader sx={{ position: 'absolute', bottom: '72px', width: '100%' }}

                    avatar={
                        <Avatar
                            src={user?.avatar}
                            sx={{ width: 120, height: 120 }}
                            aria-label="recipe"
                        >
                            R
                        </Avatar>
                    }
                />
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h6" sx={{ color: grey[1000] }}>
                            {user?.name}
                        </Typography>
                        <Typography variant="body1" sx={{ color: grey[500] }}>
                            hello word
                        </Typography>
                    </Box>

                    <Box sx={{ width: '21%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button sx={{ backgroundColor: green['A400'], }} variant="contained">Message</Button>
                        <Button sx={{ backgroundColor: green[50], color: grey[700] }} variant="contained">Followed</Button>
                    </Box>
                </CardActions>
            </Card>
        </Container>
    );
};

export default InformationProfile;

