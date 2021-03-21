import React, { useEffect } from "react";
import "./App.css";
import Telegram from "./Telegram";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispacth = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispacth(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispacth(logout());
      }
    });
  }, [dispacth]);

  return <div className="App">{user ? <Telegram /> : <Login />}</div>;
}

export default App;
