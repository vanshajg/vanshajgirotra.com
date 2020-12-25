import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

const ScrollHelper = () => {
  const [scroll_classname, setScrollClassname] = useState('')
  const onScrollClick = () => {
    if (scroll_classname === '' || scroll_classname === 'animate-rotator_second') {
      setScrollClassname('animate-rotator_first')
    } else {
      setScrollClassname('animate-rotator_second')
    }
  }
  return <div onClick={onScrollClick} className={`text-2xl fixed bottom-5 right-5 text-gray-500 z-10 ${scroll_classname}`}> <FaArrowDown /></div>
}

export default ScrollHelper