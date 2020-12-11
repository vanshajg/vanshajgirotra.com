import React, { useState } from 'react'
import data from './contacts_data'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const getContact = ({ icon: Icon, name, url }, index) => {
  return (
    <OutboundLink href={url} rel="noopener noreferrer" className="mr-4 text-3xl animate-fade_in" key={index}
      style={{ animationDelay: `${index * 0.25 + 0.25}s`, animationDuration: '1s', opacity: 0 }}>
      <Icon />
    </OutboundLink>
  )
}

const Contacts = () => {
  const [is_loaded, setLoaded] = useState(false)
  window.addEventListener('load', () => {
    setLoaded(true)
  })

  if (!is_loaded)
    return null

  return (
    <div className="flex mt-10 md:justify-start justify-center">
      {data.map((contact, index) => getContact(contact, index))}
    </div>
  )
}

export default Contacts