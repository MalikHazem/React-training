import React from "react";
import "./footer.css";
const Footlinks = () => {
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways To Watch",
    "Terms Of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
  ];
  return (
    <>
      <ul className="service">
        {links.map((link) => (
          <li className="servlink" key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
      <div className="button">
        <button>Help</button>
        <p>@ 1997-2021 , All Right Reserved</p>
      </div>
    </>
  );
};

export default Footlinks;
