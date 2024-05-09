import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/login/Login';
function MyApp() {
  return (
    <AuthProvider>
    <Login />
  </AuthProvider>
  );
}

export default MyApp;