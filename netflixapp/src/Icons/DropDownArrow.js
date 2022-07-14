import React from "react";
import classes from "./Icon.module.css";
import styles from "../Components/NavBar/NavBar.module.css";
class DropDownArrow extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes["Icon_Image"]} ${styles["Media_QuerryDisplay"]}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
}

export default DropDownArrow;
