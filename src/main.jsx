import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks.jsx'
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks.jsx'
import FocusScreen from './04-useRef/FocusScreen.jsx'
import { Layout } from './05-useLayoutEffect/Layout.jsx'
import { Memorize } from './06-memos/Memorize.jsx'
import { MemoHook } from './06-memos/MemoHook.jsx'
import { CallbackHook } from './06-memos/CallbackHook.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CallbackHook />
  /* </React.StrictMode>, */
)
