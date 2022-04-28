import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "./atoms/credentialAtom";

const Login = () => {
  const [email, setEmail] = useRecoilState(usernameState);
  const [password, setPassword] = useRecoilState(passwordState);

  const router = useNavigate();

  const check = (e) => {
    e.preventDefault();
    if (email === "username-test@yopmail.com" && password === "123456") {
      router("/MainPage");
    } else {
      console.log("Login failed");
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <div className="w-1/2 h-1/2 border p-2 rounded-lg flex flex-col justify-center items-center">
        <form className="w-full flex flex-col justify-center items-center space-y-5">
          <input
            type="text"
            placeholder="Email"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-x-10">
            <button
              className=" font-bold rounded-full py-2 px-5  active:scale-95 active:border-lime-500 hover:scale-105 text-white bg-blue-500"
              onClick={check}
            >
              Log In
            </button>
            <button
              className=" font-bold rounded-full py-2 px-5  active:scale-95 active:border-lime-500 hover:scale-105 text-white bg-blue-500"
              onClick={() => router("/Signup")}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
