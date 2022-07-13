import React from "react";
import HelpIcon from "../../Icons/HelpIcon";
import PointerIcon from "../../Icons/PointerIcon";
import UserIcon from "../../Icons/UserIcon";
import classes from "./DropDown.module.css";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes["DropDown_Menu"]}>
        <div className={classes["user_details"]}>user</div>

        <div className={classes["DropDownMenu_Option"]}>
          <PointerIcon />
          <span className={classes["Icon_description"]}>Manage Profiles</span>
        </div>

        <div className={classes["Empty_Div"]}></div>

        <div className={classes["DropDownMenu_Option"]}>
          <UserIcon />
          <span className={classes["Icon_description"]}>Account</span>
        </div>

        <div className={classes["DropDownMenu_Option"]}>
          <HelpIcon />
          <span className={classes["Icon_description"]}>Help Centre</span>
        </div>

        <h4 className={classes["SignOut_tag"]}>Sign out of Netflix</h4>
      </div>
    );
  }
}

export default DropDown;
