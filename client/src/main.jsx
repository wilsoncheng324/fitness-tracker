import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import AddActivity from './pages/AddActivity.jsx'
import Dashboard from './pages/Dashboard.jsx'
import StartExercise from './pages/StartExercise.jsx'
import Workout from './pages/Workout.jsx'
import Login from './pages/loginform.jsx'
import Signup from './pages/signupform.jsx'

import { ApolloClient, InMemoryCache } from '@apollo/client';
const uri = 'http://localhost:3001/graphql';
const client = new ApolloClient({
  uri: uri,
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
        path: "/addactivity",
        element: <AddActivity />,
      }, {
        path: "/startexercise",
        element: <StartExercise />,
      }, {
        path: "/workout",
        element: <Workout />,
      }, {
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
    <RouterProvider router={router} />
    </ApolloProvider>
)
