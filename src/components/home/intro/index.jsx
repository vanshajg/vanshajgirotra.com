import React from "react"
import Contacts from "./contacts"

const Intro = () => {
  return (
    <section className="min-h-screen pt-32 px-5 md:pt-48 md:px-32 font-bold relative">
      <p className="text-gray-500">
        Hi, I am
      </p>
      <h1 className="text-3xl md:text-5xl">
        Vanshaj Girotra
      </h1>
      <h1 className="text-3xl md:text-4xl text-gray-500 pt-2">
        and I build things for the web
      </h1>
      <p className="text-gray-500 pt-4">
        I'm a software engineer based in New Delhi specialising in building exeptional websites, applications and everything
        in between
      </p>
      <Contacts />
    </section>
  );
}

export default Intro;