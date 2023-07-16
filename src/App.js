import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
// import Signup from './components/auth/SignUp';
// import Login from './components/auth/SignIn';
import { AuthProvider } from './components/auth/authContext';

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/signUp' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/> */}
        </Routes> 
      </AuthProvider>
    </Router>
     


    </div>
  );
}

export default App;
