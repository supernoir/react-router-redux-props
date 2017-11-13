// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Components
import App from './components/App'

// Reducers
// import questionnaireApp from './reducers'

// Store
/* let store = createStore(
  questionnaireApp,
) */

ReactDOM.render(<App />, document.getElementById('app'))

/* <Provider store={store}>
<App store={store} />
</Provider>, */
