import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store/store.js'

import App from './App.jsx'
import './styles/index.scss'

import './fonts/Ubuntu-Regular.ttf'
import './fonts/Ubuntu-Medium.ttf'
import './fonts/Ubuntu-Bold.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
