import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";



const SignupScreen = () => {

  console.log(auth);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {

    try {
      e.preventDefault();
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
          console.log(authUser);
          alert("Account created succesfully");
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.message);
        });
    } catch (error) {
      console.log("error occured");
      console.log(error.message);
    }
  };

  const signIn = (e) => {

    try {
      e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
          console.log(authUser);
          alert("Logged-In succesfully");
        })
        .catch((error) => {
          alert(
            error.message
          );


        });
    } catch (error) {
      console.log("error occured");
      console.log(error.message);
    }
  };
  return (
    <div className="SignupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>

          <div className="nettonet">
            <span className="signupscreen_gray">New To NETFLIX</span>
            <span className="signupscreen_link" onClick={register}>
              Sign Up Now.
            </span>
          </div>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
