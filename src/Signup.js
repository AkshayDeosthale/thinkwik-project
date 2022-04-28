import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "./atoms/credentialAtom";

const Signup = () => {
  const [email, setEmail] = useRecoilState(usernameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [incorrect, setIncorrect] = useState(false);

  const router = useNavigate();

  const check = (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      setIncorrect(true);
      console.log("Nah mate, I need the user Id");
    } else {
      router("/MainPage");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold">Sign up</h1>
      <div className="w-1/2 h-1/2 border p-2 rounded-lg flex flex-col justify-center items-center hover:shadow-xl shadow-black hover:transition-all">
        <form className="w-full flex flex-col justify-center items-center space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className="font-bold rounded-full py-2 px-5  active:scale-95 active:border-lime-500 hover:scale-105 text-white bg-blue-500"
            onClick={check}
          >
            Sign up
          </button>
        </form>
        {incorrect && (
          <p className="mt-10 text-red-500 font-semibold">
            Nah mate, I need the Email ID
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
