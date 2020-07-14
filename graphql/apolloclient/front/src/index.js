import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

// 1. Create Client
const client = new ApolloClient({
    uri: 'YOUR_ENDPOINT',
})

// 2. Wrap App in Apollo Provider
const App = () => (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
