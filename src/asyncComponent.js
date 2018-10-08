import React from 'react';

const asyncComponent = (importComponent) => {
  return class extends React.Component {
    state = {
      component: null
    }
    componentDidMount() {
      importComponent()
        .then(({ default: component }) => this.setState({ component }))
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;