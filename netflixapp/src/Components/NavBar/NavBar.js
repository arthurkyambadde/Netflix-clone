import React from "react";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import SearchIcon from "../../Icons/SearchIcon";
import BellIcon from "../../Icons/BellIcon";
import classes from "./NavBar.module.css";
import DropDownArrow from "../../Icons/DropDownArrow";
import ProfileImage from "./profileImage.png";
import DropDown from "../DropDown/DropDown";
import UpwardPointerIcon from "../../Icons/UpwardPointerIcon";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  toggleDropDown = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  render() {
    let menuStatus;
    if (this.state.showMenu === false) {
      menuStatus = <div>{""}</div>;
    } else {
      menuStatus = (
        <div>
          <DropDown />
          <UpwardPointerIcon />
        </div>
      );
    }

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

          <div
            onMouseEnter={this.toggleDropDown}
            onMouseLeave={this.toggleDropDown}
            className={classes["PersonalProfile_Info"]}
          >
            <img
              className={classes["Profile_Image"]}
              src={ProfileImage}
              alt="profile"
            />
            <DropDownArrow />
          </div>

          <div>{menuStatus} </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
