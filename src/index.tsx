import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import { Provider } from 'mobx-react'
import RootStore from './shared/stores/rootStore'

const rootStore = new RootStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider {...rootStore}>
        <RouterProvider router={router} />
    </Provider>,
)

reportWebVitals()
