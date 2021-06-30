import React, { useEffect } from 'react'

const Redirect = ({ pathContext: { name, url } }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production")
      window.gtag("event", "redirect", { name, url });
    window.location = url;

  })
  return (
    <div>
      <h1>Redirecting you to ${url}</h1>
    </div>
  )

}

export default Redirect
