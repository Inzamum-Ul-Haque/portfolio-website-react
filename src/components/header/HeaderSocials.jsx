import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/inzamum-ul-haque-09a321180/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/inzamum.ulhaque/" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials