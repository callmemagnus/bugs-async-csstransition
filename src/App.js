import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import asyncComponent from './asyncComponent';
import ImportedComponent from './ImportedComponent';

const AsyncComponent = asyncComponent(() => import('./AsyncLoadedComponent'))

class App extends Component {
  showAsync: false
  state = {
  }
  toggleClick() {
    this.setState({ showAsync: !this.state.showAsync })
  }
  renderAsyncComponentWithAnimation() {
    return (
      <CSSTransition in={this.state.showAsync} classNames="transition-async" timeout={10000}>
        <AsyncComponent />
      </CSSTransition>
    )
  }
  renderComponentWithAnimation() {
    return (
      <CSSTransition in={this.state.showAsync} classNames="transition-import" timeout={10000}>
        <ImportedComponent />
      </CSSTransition>
    )
  }
  render() {
    return (
      <div className="App">
        <header>header</header>
        <main style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <p>
            <button onClick={this.toggleClick.bind(this)}>Click me</button>
          </p>
          <TransitionGroup>
            <div style={{ display: "grid", gridGap: "20px", gridTemplateColumns: "1fr 1fr" }}>
              {this.state.showAsync && this.renderComponentWithAnimation()}
              {this.state.showAsync && this.renderAsyncComponentWithAnimation()}
            </div>
          </TransitionGroup>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
