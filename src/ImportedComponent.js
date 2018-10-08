import React from 'react';

class ImportedComponent extends React.Component {
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
        <p>Imported component</p>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default ImportedComponent;