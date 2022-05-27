import React from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/tema";

export const NavBar = () => {
  const styles = style();
  return (
    <ul className={styles.navBar}>
      <li>
        <a href="#home" className={styles.navChild}>
          Home
        </a>
      </li>
      <li>
        <a href="#contact" className={styles.navChild}>
          Contact
        </a>
      </li>
      <li>
        <a href="#about" className={styles.navChild}>
          About
        </a>
      </li>
    </ul>
  );
};

const style = createUseStyles({
  navBar: {
    display: "block",
    listStyle: "none",
    margin: 0,
    padding: 0,
    backgroundColor: "#0005",
    width: "100%",
    overflow: "hidden",
    top: 0,
  },
  navChild: {
    display: "block",
    padding: "10px",
    float: "right",
    color: "white",
    textDecoration: "none",
    marginRight: "30px",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // float: "right",
  },
});

export default NavBar;
