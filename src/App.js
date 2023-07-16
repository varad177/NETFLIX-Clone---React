import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  getAuth
} from "firebase/auth";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser , logout } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';



function App() {
  const user = useSelector(selectUser);
  console.log(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //log in
        console.log(userAuth);
        console.log("yesss iam loggin");
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        //log out
         dispatch(logout())
      }
    })
    return unsubcribe;
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        {
          !user ? (
            < LoginScreen />
          ) : (

            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route exact path='/profile' element={<ProfileScreen />} />
              

            </Routes>


          )
        }

      </Router>
    </div>
  );
}

export default App;
