import React, { useState } from "react";
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
import { grey } from '@mui/material/colors';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { db, storage } from "../../../firebase.config";
import { ref, update } from "firebase/database";
import { uploadBytes, ref as sRef } from 'firebase/storage';
import { v4 } from 'uuid';

const InformationProfile = ({ user }) => {
    const [imageAsFile, setImageAsFile] = useState('');

    const HandelImageProfile = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            setImageAsFile(() => (image));
        }

        const mountainImagesRef = sRef(storage, `profile/${imageAsFile.name + v4()}`);
        const url = 'https://firebasestorage.googleapis.com/v0/b/' + mountainImagesRef.bucket + '/o/profile%2F' + mountainImagesRef.name + '?alt=media&token=03058de8-fdd8-412d-9ecd-1a7ee0f2cfcd'

        uploadBytes(mountainImagesRef, imageAsFile).then(() => {
            console.log('imageProfile upload')
        });

        update(ref(db, 'users/' + user.id), {
            imageProfile: url
        });
    }

    return (
        <Container >
            <Card sx={{ marginBottom: { xs: 5 }, position: 'relative' }}>
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
                    action={
                        <Button sx={{
                            backgroundColor: grey[100],
                            color: grey[800],
                            position: 'absolute',
                            right: 50,
                            bottom: 55
                            }}
                            variant="contained"
                            // type="file"
                            // onChange={HandelImageProfile}
                        >
                            <BackupOutlinedIcon sx={{marginRight: 1}}/>
                            Edit Cover Photo
                        </Button>
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

                    <Box sx={{ width: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <RemoveRedEyeOutlinedIcon sx={{ color: grey[800] }} />
                        <Button sx={{ backgroundColor: grey[200], color: grey[800] }} variant="contained">Edit basic info</Button>
                    </Box>
                </CardActions>
            </Card>
        </Container>
    );
};

export default InformationProfile;

