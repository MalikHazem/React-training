import React from 'react'
import {FacebookLogo ,InstagramLogo,YoutubeLogo,TwitterLogo } from 'phosphor-react';
import "./footer.css"
const Sociallinks = () => {
  return (
    <div className="social">
      <a className='fac' href='/'> <FacebookLogo size={30} color="#808080" weight="fill" /></a>
      <a href='/'><InstagramLogo size={30} color="#808080" weight="fill" /></a>
      <a href='/'><TwitterLogo size={30} color="#808080" weight="fill" /></a>
      <a href='/'><YoutubeLogo size={30} color="#808080" weight="fill" /></a>
      </div>
  )
}

export default Sociallinks ;