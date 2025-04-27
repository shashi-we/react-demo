import { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = (e) => {
    // validate teh form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)

    if(message) return;

    // sign in / sign up
    if(!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " +errorMessage)
        });

    } else {
      // sign in 
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " +errorMessage)
        });

    }

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="background-image"
        />
      </div>
      <form onSubmit={ (e) => e.preventDefault() } className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-sm" />}
        <input 
          type="text" 
          placeholder="Email Address" 
          ref={ email } className="p-2 my-4 w-full bg-gray-700 rounded-sm" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          ref={ password } className="p-2 my-4 w-full bg-gray-700 rounded-sm" 
        />
        <p className="text-red-500 font-bold text-lg">{ errorMessage }</p>
        <button 
          className="p-4 my-6 bg-red-700 w-full rounded-lg" 
          onClick={ handleButtonClick }>
            { isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm }>{ isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}</p>
      </form>
    </div>
  )
}

export default Login;
