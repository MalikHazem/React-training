import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Link } from 'react-router-dom';

const Sidebar = ({ mode, setMode, openSide, setOpenSide }) => {

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", md: "flex" },
        display: openSide == false ? "none" : "flex",
      }}
      className="pt-5 lg2:flex hidden rounded-xl fixed left-3 top-20 bottom-0"
    >
      <Box >
        <List>
          <Link to="/" className='flex'>
            <ListItem disablePadding>
              <ListItemButton LinkComponent='a' href='#'>
                <ListItemIcon>
                  <CottageIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <AutoStoriesIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <GroupsIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Groubs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <LocalGroceryStoreIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Marketplase" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <EmojiPeopleIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Frends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <SettingsIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/myProfile" className='flex'>
              <ListItemButton LinkComponent='a' href='#'>
                <ListItemIcon>
                  <AccountCircleIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding onClick={(e) => setMode(mode == 'dark' ? 'light' : 'dark')}>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <NightsStayIcon color='primary' />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
