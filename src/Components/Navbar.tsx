import React,{ useState } from "react";
import styles from "./Navbar.module.css"
import logo from "../images/logo.svg"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

//Navbar component

const Navbar=()=>{
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className={styles["navbar"]}>
        <div className={styles["navbar-links"]}>
          <div className={styles["navbar-links_logo"]}>
          <a href="#home">
                <img src={logo} />
                <span className={styles["navbar-links_logo_text"]}>LawConnect</span>
            </a> 
          </div>
          <div className={styles["navbar-links_container"]}>
            <p><a href="#People">For People</a></p>
            <p><a href="#business">For Business</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        <div className={styles["navbar-login"]}>
          <p>Login</p>
          <button type="button">Create Free Account</button>
        </div>
        <div className={styles["navbar-menu"]}>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className={styles["navbar-menu_container"]}>
            <div className={styles["navbar-menu_container-links"]}>
            <p><a href="#People">For People</a></p>
            <p><a href="#business">For Business</a></p>
            <p><a href="#contact">Contact</a></p>
            </div>
            <div className={styles["navbar-menu_container-links-login"]}>
              <p>Login</p>
              <button type="button">Create Free Account</button>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Navbar;