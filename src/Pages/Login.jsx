import React, { useState } from "react";
import "../Components/Style.scss";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">My Chat app</span>
        <span className="title">Login</span>
        <form onSubmit={handlesubmit}>
          <input type="email" placeholder="Enter your Email"></input>
          <input type="password" placeholder="Enter your Password"></input>

          <button>Sign In</button>
          {err && <span>Something went wrong.</span>}
        </form>
        <p>
          Don't have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
