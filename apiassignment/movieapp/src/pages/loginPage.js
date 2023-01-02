// //imports
// import React, { useContext, useState } from "react";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { AuthContext } from '../contexts/authContext';

// //exports
// const LoginPage = props => {
//     const [userName, setUserName] = useState("");
//     const context = useContext(AuthContext)
//     const login = () =>
//     {context.authenticate(userName);};
//     const {from} = props.location.state || {from: { pathname: "/" }};

//     if (context.isAuthenticated === true)
//     {
//         return <Redirect to={from} />;
//     }
//     return (
//         <>
//             <h2>Login page</h2>
//             <p>You must login to your account</p>
//             <input id="userName" placeholder="user name" onChange={e => {setUserName(e.target.value);}}></input><br />
//             <button onClick={login}>Log In</button>
//             <p>Or Sign Up <Link to="/signup">Sign Up</Link></p>
//         </>
//     );
// };
// export default LoginPage;

import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;