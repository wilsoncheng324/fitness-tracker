import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import Activity from './pages/Activity.jsx'
import Dashboard from './pages/Dashboard.jsx'

import Login from './pages/loginform.jsx'
import Signup from './pages/signupform.jsx'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
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
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const router = createBrowserRouter([ // define the routes
  {
    path: "/", 
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      }, {
        path: "/dashboard",
        element: <Dashboard />,
      }, {
        path: "/activity",
        element: <Activity />,
      }, 
      // {
      //   path: "/startexercise",
      //   element: <StartExercise />,
      // }, 
      // {
      //   path: "/workout",
      //   element: <Workout />,
      // }, 
      {
        path: "/loginform",
        element: <Login />,
      }, {
        path: "/signupform",
        element: <Signup />,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ApolloProvider>
)

