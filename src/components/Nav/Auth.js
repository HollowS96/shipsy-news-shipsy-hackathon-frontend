import React, { useContext } from "react";
import appContext from "../../context/app-context";

const Auth = () => {
  const { isLoggedIn, setIsSigningIn } = useContext(appContext);

  const signInAction = () => {
    setIsSigningIn(true);
  };

  // default: logged out
  let innerElem = <button onClick={signInAction}>Sign in</button>;
  if (isLoggedIn) {
    innerElem = <span>Hi, Sonik</span>;
  }

  return <li className="app--navigation__links-label">{innerElem}</li>;
};

export default Auth;
