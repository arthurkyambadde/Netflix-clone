import React from "react";
import classes from "./NavigationLinks.module.css";
import BrowseDropDown from "../../Icons/BrowseDropDown";
import BrowseMenuArrow from "../../Icons/BrowseMenuArrow";

class NavigationLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowBrowseMenu: false,
    };
  }

  DisplayBrowseMenu = () => {
    this.setState({
      ShowBrowseMenu: !this.state.ShowBrowseMenu,
    });
  };

  render() {
    let BrowseMenu;
    if (this.state.ShowBrowseMenu === false) {
      BrowseMenu = <div></div>;
    } else {
      BrowseMenu = (
        <div className={classes["BrowseMenu_Animation"]}>
          <BrowseMenuArrow />
          <ul className={classes["navigationLinks_Container"]}>
            <li className={classes["navigation_Link"]}>
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

    return (
      <div className={classes["NavigationLinks_Wrapper"]}>
        <div
          onMouseEnter={this.DisplayBrowseMenu}
          onMouseLeave={this.DisplayBrowseMenu}
          className={classes["BrowseMenu_Container"]}
        >
          <p className={classes["BrowseMenu_para"]}>Browse</p>

          <BrowseDropDown />
        </div>

        <div className={classes["BrowseMenu__Wrapper"]}>
          <div className={classes["MenuDisplay"]}>
            <BrowseMenuArrow />
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
          {BrowseMenu}
        </div>
      </div>
    );
  }
}

export default NavigationLinks;
