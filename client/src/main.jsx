
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Userinputdata from './components/Userinputdata.jsx'
import HomePage from './pages/HomePage.jsx'
import Activity from './pages/Activity.jsx'
import Dashboard from './pages/Dashboard.jsx'
// import StartExercise from './pages/StartExercise.jsx'
// import Workout from './pages/Workout.jsx'
import Login from './pages/Loginform.jsx'
import Signup from './pages/Signupform.jsx'

import { ApolloClient, InMemoryCache } from '@apollo/client';
const uri = '/graphql';
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
        path: "/Dashboard",
        element: <Dashboard />,
      }, {
        path: "/Activity",
        element: <Activity />,
      }, 
      {
        path: "/Loginform",
        element: <Login />,
      }, {
        path: "/Signupform",
        element: <Signup />,
      }, {
        path: "/Userinputdata",
        element: <Userinputdata />,
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

