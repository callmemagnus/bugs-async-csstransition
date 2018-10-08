import React from 'react';

class AsyncLoadedComponent extends React.Component {
  state = {
    text: "now"
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "then" })
    }, 2000)
  }
  render() {
    return (
      <div>
        <p>Async component</p>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default AsyncLoadedComponent;