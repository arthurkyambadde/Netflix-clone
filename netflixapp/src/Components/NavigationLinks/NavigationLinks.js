import React from "react";
import classes from "./NavigationLinks.module.css";

class NavigationLinks extends React.Component {
  render() {
    return (
      <ul className={classes["navigationLinks_Container"]}>
        <li className={classes["navigation_Link"]}>
          {" "}
          <a href="./home">Home</a>{" "}
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="./series">Serie</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="./films">Films</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="./latest">Latest</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="./myList">My List</a>
        </li>
      </ul>
    );
  }
}

export default NavigationLinks;
