import React from "react";
import classes from "./Icon.module.css";

class SearchIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes["Icon_Image"]}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );
  }
}

export default SearchIcon;
