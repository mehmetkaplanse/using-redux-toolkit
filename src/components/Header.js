import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';



function Header() {

    const {dark, language} = useSelector(state => state.site)


  return (
    <div>
        header
        <nav>
            <NavLink to="/" exact={true} activeClassName="active">
              Anasayfa
            </NavLink>
            <NavLink to="/about" exact={true} activeClassName="active">
              About
            </NavLink>
            <NavLink to="/profile" exact={true} activeClassName="active">
              Profile
            </NavLink>
        </nav>
        <div>
            Dark mod = {dark ? 'evet' : 'hayır'} <br />
            Mevcut dil = {language}
        </div>
    </div>
  )
}

export default Header