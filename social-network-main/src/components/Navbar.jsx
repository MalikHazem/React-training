import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  alpha,
  Toolbar,
  Tooltip,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Mail from "@mui/icons-material/Mail";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "#777",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Navbar = ({ openSide, setOpenSide }) => {
  const { HandelSignOut, userIn } = UserAuth();
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const { usersList } = UserAuth();
  const [open, setOpen] = useState(false);

  const handelSignOut = async () => {
    try {
      await HandelSignOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const [inputUser, setInputUser] = useState("");

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  const HandelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.inputUser.value;
    navigate(`/profile?email=${email}`)
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}
        >
          MeetMax
        </Typography>
        <MenuIcon
          sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
          onClick={(e) => {
            setOpenSide(!openSide);
          }}
        />

        <form onSubmit={HandelSubmit} className="hidden md1:flex gap-5">
          <Autocomplete
            freeSolo
            options={usersList.map((u) => ({ label: u.email, user: u }))}
            sx={{ width: 300 }}
            className="bg-slate-50 rounded-lg"
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="search for users..."
                size="small"
                name="inputUser"
                className="text-black dark:text-white"
              />
            )}
          />
          <button
            type="submit"
            className="px-2 py-1 rounded-lg bg-blue-300 text-black hover:bg-blue-200"
          >
            Check
          </button>
        </form>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="inherit" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsRoundedIcon color="inherit" />
          </Badge>
          <Tooltip title="Account settings">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                px: "12px",
                py: "4px",
                bgcolor: "#ffe5",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#ffe9",
                  color: "#fff",
                },
              }}
              onClick={(e) => setOpen(true)}
            >
              <Avatar alt="Girl" src={userIn?.photoURL} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  ml={1}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {userIn?.displayName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  ml={1}
                  sx={{ display: { xs: "none", md: "flex", fontSize: "12px" } }}
                >
                  {userIn?.email}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
          <Menu
            id="account-menu"
            open={open}
            onClose={(e) => setOpen(false)}
            onClick={(e) => setOpen(false)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: -56,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 30,
                  width: 12,
                  height: 12,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link to="/profile">
              <MenuItem>
                <Avatar />
                <span> Profile</span>
              </MenuItem>
            </Link>
            <MenuItem>
              <Avatar /> Account Setting
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAddAltRoundedIcon fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsApplicationsRoundedIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handelSignOut}>
              <ListItemIcon>
                <ExitToAppRoundedIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
