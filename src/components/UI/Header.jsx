import React from 'react'
import logo from '../../img/logo.png'
import styles from '../../App.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo of breaking bad" />
        </header>
    )
}

export default Header
