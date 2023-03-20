import "./log-in.css";
import { TEMP_USERS } from "../../data/temp-data";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/imgs/logo/logo2.png";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../componants/provider/dataProvider.componant";
const LogIn = () => {
  let { handleLogIn, user } = useContext(DataContext);
  const navigate = useNavigate();
  // let {user} =
  useEffect(() => {
    if (user !== null) {
      if (user.admin) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = TEMP_USERS.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      handleLogIn(user);
      if (user.admin) {
        navigate("/admin", { replace: true });
      } else {
        navigate("/home", { replace: true });
      }
    } else {
      alert("I don't know you");
    }
  };
  return (
    <div className="body">
      <div className="upper">
        <div className="logo">
          <img src={logo2} className="img-logo" />
        </div>
        <div className="login-div">
          <form className="login" onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="input-text">
              <input
                type="text"
                id="inputEmail"
                name="email"
                placeholder="Email or phone number"
              />
              <div className="warning-input" id="warningEmail">
                Please enter a valid email or phone number.
              </div>
            </div>

            <div className="input-text">
              <input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Password"
              />
              <div className="warning-input" id="warningPassword">
                Your password must contain between 4 and 60 characters.
              </div>
            </div>
            <div className="signin-button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
