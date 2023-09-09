import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Village from './pages/Village';
import Search from './pages/Search';
import Request from '.pages/Request';
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
              />
            <Route
              path="/about"
              element={<About />}
              />
            <Route
              path='/profile/:id'
              element={<Profile />}
              />
            <Route
              path='/village/:id'
              element={<Village />}
              />
            <Route
              path='/village/:id/request/:id'
              element={<Request />}
              />
            <Route
              path='/search'
              element={<Search />}
              />

          </Routes>
             <footer>
              <Nav />
              </footer> 
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
