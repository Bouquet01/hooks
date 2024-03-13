import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks.jsx'
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MultipleCustomHooks />
  /* </React.StrictMode>, */
)
