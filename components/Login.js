import React from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Login = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl " + fugaz.className}>
        Login / Register
      </h3>
      <p>You're one step away!</p>
      <input className="rounded-full outline-none duration-200 hover:border-indigo-700 focus:border-indigo-700 w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-1 border-solid border-indigo-400" placeholder="Email"/>
      <input className="rounded-full outline-none duration-200 hover:border-indigo-700 focus:border-indigo-700 w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-1 border-solid border-indigo-400" placeholder="Password" type="password" />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
      <p>Don't have an account? <span className="text-indigo-600 text-center">Sign up</span></p>
    </div>
  );
};

export default Login;
