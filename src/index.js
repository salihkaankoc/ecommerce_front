import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import { AuthProvider } from './contexts/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider>
      <MyApp />
    </AuthProvider>
  </React.StrictMode>
);