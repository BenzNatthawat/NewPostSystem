import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import Mainmenu from './route/Main_menu';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { resolvers, defaults } from './resolvers';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const cache = new InMemoryCache();

const typeDefs = `
  type Modal {
    id: Int!
    show: Boolean!
	}
	
  type Mutation {
    toggleModal(id: Int!,show: Boolean!): Modal
  }

  type Query {
    modals: [Modal]
  }
`
const client = new ApolloClient({
  cache,
  link: withClientState({
    resolvers,
    defaults,
		cache,
		typeDefs,
  }).concat(
    new HttpLink({
      uri: `https://eu1.prisma.sh/kritsadapk-9996a4/hello-world/dev`,
    }),
  ),
});

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
