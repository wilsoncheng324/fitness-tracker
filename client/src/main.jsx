
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userinputdata from './components/Userinputdata.jsx'
import HomePage from './pages/HomePage.jsx'
import Activity from './pages/Activity.jsx'
import Dashboard from './pages/Dashboard.jsx'

import Login from './pages/loginform.jsx'
import Signup from './pages/signupform.jsx'

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
        path: "/dashboard",
        element: <Dashboard />,
      }, {
        path: "/activity",
        element: <Activity />,
      }, 
      {
        path: "/loginform",
        element: <Login />,
      }, {
        path: "/signupform",
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

