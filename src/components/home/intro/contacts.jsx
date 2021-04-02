import React, { useState, useEffect } from 'react'
import data from './contacts_data'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const getContact = ({ icon: Icon, name, url }, index) => {
  return (
    <OutboundLink href={url} rel="noopener noreferrer" target="_blank" className="mr-4 text-3xl animate-fade_in" key={index}
      // check why opacity: 0 had to be given
      style={{ animationDelay: `${index * 0.25 + 0.25}s`, animationDuration: '1s', opacity: 0 }}>
      <Icon />
    </OutboundLink>
  )
}

const Contacts = () => {
  const [is_loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])


  if (!is_loaded)
    return null

  return (
    <div className="flex mt-10 md:justify-start justify-center h-10">
      {data.map((contact, index) => getContact(contact, index))}
    </div>
  )
}

export default Contacts