import './App.css';
import { AuthProvider } from './auth/AuthProvider';
// import { useAuth0 } from '@auth0/auth0-react'
// import { Profile } from './components/Profile';
// import { ButtonLogout } from './components/ButtonLogout';
// import { ButtonLogin } from './components/ButtonLogin';
import { Router } from './router/Router';

function App() {

  // const { isAuthenticated } = useAuth0();

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {isAuthenticated ? 
    //       <>
    //         <Profile />
    //         <ButtonLogout />
    //       </>
    //       : <ButtonLogin />
    //     }
    //   </header>
    // </div>
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;