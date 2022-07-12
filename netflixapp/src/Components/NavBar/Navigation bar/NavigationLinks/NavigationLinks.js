import React from "react";
import classes from "./NavigationLinks.module.css";

class NavigationLinks extends React.Component {
  render() {
    return (
      <ul className={classes["navigationLinks_Container"]}>
        <li className={classes["navigation_Link"]}>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="#">Serie</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="#">Films</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="#">Latest</a>
        </li>
        <li className={classes["navigation_Link"]}>
          <a href="#">My List</a>
        </li>
      </ul>
    );
  }
}

export default NavigationLinks;
