import React, { useEffect } from 'react'

const Redirect = ({ pathContext: { name, url } }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && window.gtag)
      window.gtag("event", "redirect", { name, url });
    window.location = url;

  })
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-base md:text-3xl text-center">Redirecting you to {url}</h1>
    </div>
  )

}

export default Redirect
