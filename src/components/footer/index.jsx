import React from 'react'
import contacts from './contacts_data'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const getContact = ({ icon: Icon, name, url }, index) => {
  return (
    <OutboundLink href={url} rel="noopener noreferrer" target="_blank" key={index} className="text-2xl m-2 md:m-4">
      <Icon />
    </OutboundLink>
  )
}

export const Footer = () => {
  return (
    <div className="flex absolute bottom-2 left-0 w-screen justify-center border-gray-200 border-t">
      {contacts.map((contact, index) => getContact(contact, index))}
    </div>
  )
}