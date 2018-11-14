import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from "react-router-dom"

import 'semantic-ui-css/semantic.min.css'
import Mainmenu from './route/Main_menu'
import { ApolloProvider } from 'react-apollo'
import { WebSocketLink } from 'apollo-link-ws'
import ApolloClient from 'apollo-client'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://eu1.prisma.sh/kritsadapk-9996a4/hello-world/dev'
})

const wsLink = new WebSocketLink({
  uri: 'wss://eu1.prisma.sh/kritsadapk-9996a4/hello-world/dev'
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => {
      switch (object.__typename) {
        case 'foo': return object.key; // use `key` as the primary key
        case 'bar': return object.blah; // use `blah` as the priamry key
        default: return object.id || object._id; // fall back to `id` and `_id` for all other types
      }
    }
  })
})

// https://eu1.prisma.sh/kritsadapk-9996a4/hello-world/dev

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<Mainmenu/>
		</Router>
	</ApolloProvider>

	, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
