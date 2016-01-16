import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }
}

export default connect(state => state)(App);
