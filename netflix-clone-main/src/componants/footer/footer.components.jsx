import "./footer.css"

import Footlinks from "./footlinks.components";
import Sociallinks from "./social.components";
const Footer = () => {
  return (
    <div className="footer">
      <Sociallinks/>
      <Footlinks/>
      </div>
  )
}

export default Footer;