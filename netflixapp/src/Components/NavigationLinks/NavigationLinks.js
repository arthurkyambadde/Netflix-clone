import React from "react";
import classes from "./NavigationLinks.module.css";
import BrowseDropDown from "../../Icons/BrowseDropDown";

class NavigationLinks extends React.Component {
  render() {
    return (
      <div className={classes["NavigationLinks_Wrapper"]}>
        <div className={classes["BrowseMenu_Container"]}>
          <p className={classes["BrowseMenu_para"]}>Browse</p>

          <BrowseDropDown />
        </div>

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
      </div>
    );
  }
}

export default NavigationLinks;
