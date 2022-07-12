import React from "react";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import SearchIcon from "../Icons/SearchIcon";
import BellIcon from "../Icons/BellIcon";
import classes from "./NavBar.module.css";
import DropDownArrow from "../Icons/DropDownArrow";
import ProfileImage from "./profileImage.png";
import DropDown from "../DropDown/DropDown";
import UpwardPointerIcon from "../Icons/UpwardPointerIcon";

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
            <img
              className={classes["Profile_Image"]}
              src={ProfileImage}
              alt="profile"
            />
            <DropDownArrow />
          </div>
          <DropDown />
          <UpwardPointerIcon />
        </div>
      </div>
    );
  }
}

export default NavBar;