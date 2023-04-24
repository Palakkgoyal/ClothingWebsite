import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </ StrictMode>
  // <Auth0Provider
  //   domain="dev-7wlpfj0q7dq5qhek.us.auth0.com"
  //   clientId="D0eLUhJVPENbbE6dAKIt0Vu5uQKcixqh"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  //   <App />
  // </Auth0Provider>
)
