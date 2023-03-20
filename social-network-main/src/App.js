import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./components/profile/MyProfile/MyProfile";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import PageHome from "./components/pagehome/HomePage";
import FriendsProfile from "./components/profile/FriendsProfile/FriendsProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home>
            <PageHome />
          </Home>
        } />
        <Route path="/myProfile" element={
          <Home>
            <MyProfile />
          </Home>
        } />
        <Route path={`/profile?email=:email`} element={
          <Home>
            <FriendsProfile email={'202834@ppu.edu.ps'}/>
          </Home>
        } />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default App;
