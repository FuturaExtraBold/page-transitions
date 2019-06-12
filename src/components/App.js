import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";

const App = (props) => {
  const currentKey = window.location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };
  console.log("this.props.location:", props.location, "currentKey:", currentKey, "timeout:", timeout);
  return (
    <Layout>
      <TransitionGroup>
        <Transition
          key={ currentKey }
          timeout={ timeout }
          mountOnEnter={ true }
          unmountOnExit={ true }
          onEnter={ (node) => { console.log("enter", node); }}
          onExit={ (node) => { console.log("exit", node); }}
        >
          <div className="content">
            <Switch location={ props.location }>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/contact" component={ Contact } />
            </Switch>
          </div>
        </Transition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
