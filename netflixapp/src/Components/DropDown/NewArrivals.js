import React from "react";
import classes from "./NewArrivals.module.css";

class NewArrivals extends React.Component {
  render() {
    return (
      <div>
        <div className={classes["NewArrivals_Container"]}>
          <div className={classes["NewArrival_Item"]}>
            <div className={classes["NewArrival_Item-Image"]}>why</div>

            <div className={classes["NewArrival_Item-Description"]}>
              <p className={classes["NewArrival_Item-Description--Header"]}>
                kgdkgkg fmsfmlfls njeje njaejjlr
              </p>
              <p className={classes["NewArrival_Item-Description--para"]}>
                {" "}
                4 weeks ago
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivals;
