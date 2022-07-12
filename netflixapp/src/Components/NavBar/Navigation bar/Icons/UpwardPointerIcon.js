import React from "react";
import classes from "./Icon.module.css";
import styles from "./UpwardPointerIcon.module.css";

class UpwardPointerIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes["Icon_Image"]} ${styles["UpwardPointer"]}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    );
  }
}

export default UpwardPointerIcon;
