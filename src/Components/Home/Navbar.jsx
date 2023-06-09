import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../../Context/Authcontext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="Navbar">
      <span className="logo">My Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}
