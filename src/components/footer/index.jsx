import React, { useContext } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { ThemeContext } from '../../context/themeContext'
import { themes } from '../../contants/theme'

import {
  SiGithub,
  SiLinkedin,
  SiStackoverflow,
  SiMaildotru,
} from 'react-icons/si'

const contacts_data = [
  {
    name: 'Linkedin',
    icon: SiLinkedin,
    url: 'https://linkedin.com/in/vanshajgirotra',
  },
  {
    name: 'Stackoverflow',
    icon: SiStackoverflow,
    url: 'https://stackoverflow.com/users/5830776/',
  },
  {
    name: 'Github',
    icon: SiGithub,
    url: 'https://github.com/vanshajg',
  },
  {
    name: 'E-mail',
    icon: SiMaildotru,
    url: 'mailto:vanshajgirotra@gmail.com',
  },
]
const getContact = ({ icon: Icon, name, url }, index) => {
  return (
    <OutboundLink
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      key={index}
      className="text-2xl m-2 md:m-4"
    >
      <Icon />
    </OutboundLink>
  )
}

export const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const is_dark = theme === themes.dark
  const footer_background = is_dark ? 'dark-background' : 'light-background'
  return (
    <div
      className={`flex left-0 w-screen justify-center fixed bottom-0 ${footer_background}`}
    >
      {contacts_data.map((contact, index) => getContact(contact, index))}
    </div>
  )
}
