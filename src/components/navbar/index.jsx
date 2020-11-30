import React, { useContext } from 'react'

import { ThemeContext } from '../../context/themeContext'
import { LanguageContext } from '../../context/languageContext'
import { FaSun, FaRegMoon } from 'react-icons/fa'
import { themes } from '../../contants/theme'


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
    <div className="">
      <span onClick={toggleTheme}>{theme === themes.dark ? <FaRegMoon className="text-2xl text-gray-500" /> : <FaSun className="text-2xl text-gray-500" />}</span>
    </div>
  </div>
}

export { Navbar }