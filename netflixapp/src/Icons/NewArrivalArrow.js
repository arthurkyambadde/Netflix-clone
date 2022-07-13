import React from "react";
import classes from "./Icon.module.css";
import styles from "./NewArrivalArrow.module.css";

class NewArrivalArrow extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes["Icon_Image"]} ${styles["NewArrival"]}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    );
  }
}

export default NewArrivalArrow;
