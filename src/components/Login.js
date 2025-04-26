import { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-sm" />}
        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700 rounded-sm" />
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700 rounded-sm" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{ isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm }>{ isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}</p>
      </form>
    </div>
  )
}

export default Login;
