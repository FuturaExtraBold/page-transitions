import React, { Fragment } from "react";

import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
    <Navigation />
    <div className="App">
      { props.children }
    </div>
    </Fragment>
  );
}

export default Layout;
