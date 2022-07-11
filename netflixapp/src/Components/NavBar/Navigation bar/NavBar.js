import React from "react";
import NavigationLinks from "./NavigationLinks";
import SearchIcon from "./SearchIcon";
import BellIcon from "./BellIcon";
import classes from "./NavBar.module.css";
import DropDownArrow from "./DropDownArrow";
import ProfileImage from "./profileImage.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className={classes["NavigationBarContainer"]}>
        <div className={classes["NavigationLinks_Header"]}>
          <h1 className={classes["Navigation_Icon"]}>NETFLIX</h1>
          <NavigationLinks />
        </div>

        <div className={classes["profileInfo_container"]}>
          <SearchIcon />
          <p className={classes["Profile_name"]}>Arthur</p>
          <BellIcon />

          <div className={classes["PersonalProfile_Info"]}>
            <img className={classes["Profile_Image"]} src={ProfileImage} />
            <DropDownArrow />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
