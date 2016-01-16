import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Reducer from './reducers'

let finalStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(Reducer)

let rootElement = document.getElementById('root');

render(
  <Provider store={finalStore}>
    <App />
  </Provider>,
  rootElement
)
