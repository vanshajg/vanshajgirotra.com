import React, { useContext } from 'react'
import contacts from './contacts_data'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { ThemeContext } from '../../context/themeContext'
import { themes } from '../../contants/theme'

const getContact = ({ icon: Icon, name, url }, index) => {
  return (
    <OutboundLink href={url} rel="noopener noreferrer" target="_blank" key={index} className="text-2xl m-2 md:m-4">
      <Icon />
    </OutboundLink>
  )
}

export const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const is_dark = theme === themes.dark;
  const footer_background = is_dark ? 'dark-background' : 'light-background'
  return (
    <div className={`flex left-0 w-screen justify-center border-gray-200 border-t fixed bottom-0 ${footer_background}`}>
      {contacts.map((contact, index) => getContact(contact, index))}
    </div>
  )
}