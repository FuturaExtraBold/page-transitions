import React, { Fragment } from "react";

import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      { props.children }
      <div className="overlay">
        <div className="overlay__emoji">🤙</div>
      </div>
    </Fragment>
  );
}

export default Layout;
