import React, { useContext } from 'react'
import Seo from '../seo';
import { ThemeContext } from '../../context/themeContext'
import styles from './wrapper.css'
import { themes } from '../../contants/theme';

const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === themes.dark ? 'dark' : 'light'} >
      {/* <Seo /> */}
      <div className="">
        {children}
      </div>
    </div >
  );
}
export default Wrapper