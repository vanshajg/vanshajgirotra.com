import React, { useState } from "react"

const Intro = () => {
  // const []
  return (
    <section className="min-h-screen pt-16 px-5 md:pt-40 md:px-32 font-bold">
      <p className="text-gray-500">
        Hi, I am
      </p>
      <h1 className="text-3xl md:text-4xl">
        Vanshaj Girotra
      </h1>
      <h1 className="text-3xl md:text-4xl text-gray-500 pt-2">
        and I build things for the web
      </h1>
      <p className="text-gray-500 pt-4">
        I'm a software engineer based in New Delhi with more than a year of experience of building websites.
      </p>
    </section>
  );
}

export default Intro;