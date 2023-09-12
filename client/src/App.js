import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AuthService from './utils/auth';

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import WhatVillage from './pages/WhatVillage';
import Profile from './pages/Profile';
import EditProf from './pages/EditProfile';
import Village from './pages/Village';
import Search from './pages/Search';
import Request from './pages/Request';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import CreateReq from './pages/CreateReq';
import CreateVillages from './pages/CreateVillage';
import EditRequest from './pages/EditReq';
import EditVillages from './pages/EditVillage'

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
              path="/what-is-the-village"
              element={<WhatVillage />}
              />
            <Route
              path="/about"
              element={<About />}
              />
            <Route
              path="/village/:id/request/:id/edit-request"
              element={<EditRequest />}
              />
            <Route
              path="/village/:id/edit-village"
              element={<EditVillages />}
              />
            <Route
              path="/signup"
              element={<SignUp />}
              />
            <Route
              path='/profile/:id'
              element={<Profile />}
              />
              <Route
              path='/profile/:id/edit-profile'
              element={<EditProf />}
              />
            <Route
              path='/village/:id'
              element={<Village />}
              />
            <Route
              path ='/village/:id/create-request'
              element ={<CreateReq />}
              />
            <Route
              path='/village/:id/request/:id'
              element={<Request />}
              />
            <Route
              path='/search'
              element={<Search />}
              />
            <Route
              path='village/:id/create-village'
              element={<CreateVillages />}
              />
          </Routes>
             <footer>
              {/* <Nav /> */}
              
              {/* {AuthService.loggedIn() && (<Nav />) } */}

              {AuthService.loggedIn()
        ? (<div>Logged In!</div>)
        : (<div>Logged Out</div>)
      } 
                
                            
              </footer> 
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
