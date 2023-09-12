import React, { useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Johnmcavaddy from './Johnmcavaddy';

import LandingPage from "./Mernjournal/pages/LandingPage/index.js";
import SingleEntry from "./Mernjournal/pages/SingleEntry/index.js";
import Profile from "./Mernjournal/pages/Profile/index.js";
import NewEntry from "./Mernjournal/pages/NewEntry/index.js";
import Footer from './Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Inner />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

function Inner() {
  return(
    <Routes>
      <Route path='/' element={<Johnmcavaddy />} />
      <Route path='/mernjournal' element={<LandingPage />} />
      <Route path='/mernjournal/homepage' element={<Profile />} />
      <Route 
            path="mernjournal/entry/:entryId"
            element={<SingleEntry />}
          />
      <Route path='mernjournal/newentry' element={<NewEntry />} />
      <Route path='*' element={<Johnmcavaddy />} />
    </Routes>
  )
}

export default App;
