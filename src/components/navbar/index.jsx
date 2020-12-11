import React, { useContext } from 'react'

import { ThemeContext } from '../../context/themeContext'
import { LanguageContext } from '../../context/languageContext'
import { FaSun, FaRegMoon } from 'react-icons/fa'
import { themes } from '../../contants/theme'
import ScrollHelper from './scrollHelper'


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { language, changeLanguage } = useContext(LanguageContext)

  return <div className="flex px-5 justify-between py-5">
    <div>
      <span>
        {/* {" "} add menu items here */}
      </span>
      <span>

      </span>
    </div>
    <div className="hover:text-primary-500">
      <span onClick={toggleTheme}>{theme === themes.dark ? <FaRegMoon className="text-2xl md:text-3xl text-gray-500" /> : <FaSun className="text-2xl md:text-3xl text-gray-500" />}</span>
    </div>
    {/* <ScrollHelper /> */}
  </div>
}

export { Navbar }