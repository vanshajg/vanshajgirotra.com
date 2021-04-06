import React from "react"
import Contacts from "./contacts"

const Intro = () => {
  return (
    <section className="pt-32 md:pt-48 font-bold relative">
      <p className="text-gray-500">
        Hi, I am
      </p>
      <h1 className="text-3xl md:text-6xl">
        Vanshaj Girotra
      </h1>
      <h1 className="text-3xl md:text-5xl text-gray-500 pt-2">
        and I build things for the web
      </h1>
      <p className="text-gray-500 pt-4">
        I'm a software engineer specialising in building exceptional websites, applications and everything
        in between
      </p>
      {/* <Contacts /> */}
    </section>
  );
}

export default Intro;