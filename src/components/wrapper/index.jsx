import React, { useContext } from 'react'
import Seo from '../seo';
import { ThemeContext } from '../../context/themeContext'
import styles from './wrapper.css'
import { themes } from '../../contants/theme';
import { Navbar } from '../navbar'
import { Footer } from '../footer'

const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === themes.dark ? 'dark' : 'light'}>
      <Navbar />
      <div className=" px-5 md:px-32 min-h-screen">
        {children}
      </div>
      <Footer />
    </div >
  );
}
export default Wrapper