import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = ({isProfile,children}  ) => {
  const [openSide, setOpenSide] = useState(true);
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar openSide={openSide} setOpenSide={setOpenSide} />

            <Box className="flex" >
              <Sidebar
                mode={mode}
                setMode={setMode}
                openSide={openSide}
                setOpenSide={setOpenSide}
              />
            </Box>
              {children}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
