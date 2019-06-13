import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import $ from "jquery";
import { TweenMax, TimelineMax } from "gsap";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";

class App extends Component {

  componentDidMount() {
    console.log("App componentDidMount");

    this.overlay = $(".overlay");
    this.tl = new TimelineMax();
    this.animationDuration = 0.5;

    this.tl.set(this.overlay, { x: "-100%" });
  }

  onEnter = (node) => {
    this.tl.set(node, { display: "none" });
    this.tl.fromTo(this.overlay, this.animationDuration, { x: "-100%" }, { x: "0%", ease: "easeInOutExpo" });
    this.tl.set(node, { display: "block" });
    this.tl.to(this.overlay, this.animationDuration, { x: "100%", ease: "easeInOutExpo" });
  }

  onExit = (node) => {
    TweenMax.set(node, { display: "none", delay: this.animationDuration });
  }

  render() {
    const currentKey = window.location.pathname.split('/')[1] || '/';
    return (
      <Layout>
        <TransitionGroup>
          <Transition
            key={ currentKey }
            timeout={ 2000 }
            onEnter={ this.onEnter }
            onExit={ this.onExit }
          >
            <Switch location={ this.props.location }>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/contact" component={ Contact } />
            </Switch>
          </Transition>
        </TransitionGroup>
      </Layout>
    );
  }
}

export default App;
