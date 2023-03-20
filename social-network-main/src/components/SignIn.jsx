import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import googleImage from "../assets/images/Google__G__Logo.svg.webp";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignInImg from "../assets/images/SignIn.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Shadi Almohtaseb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const { signInWithGoogle, userIn } = UserAuth();
  const navigate = useNavigate();
  const handelSignIn = async () => {
    await signInWithGoogle();
  };

  React.useEffect(() => {
    if (userIn) navigate("/");
  }, [userIn]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "#1976d2", width: "50px", height: "50px" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="text-4xl">Sign in</Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={SignInImg} width={450} alt="SignInImg" />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "space-between",
                px: "60px",
                gap: "15px",
              }}
              onClick={handelSignIn}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  p: "4px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={googleImage} width={30} alt="google" />
              </Box>
              <Typography sx={{ fontSize: "20px" }}>
                Sign In With Google
              </Typography>
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
