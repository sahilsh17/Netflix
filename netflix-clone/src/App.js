import './App.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const user = null;
  return (
    <div className="App">


      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />


          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
