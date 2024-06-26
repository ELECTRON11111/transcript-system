"use client";

import { useState } from "react";
import Link from "next/link";
// import CodeImg from "../../public/code-glasses.jpg";

import Login from "../components/Login/Login";
import Navigation from "../components/Navigation/Navigation";
import About from "../components/About/About";


export default function Home(): any {
  const [NavHidden, changeNavHidden] = useState(true);

  const burgerClickedHandler = (e: any) => {
    e.preventDefault();

    // change NavHidden value and maintain state immutability
    const value = NavHidden;
    changeNavHidden(!value);
  }

  return (
    <main className = {`bg-gray-100 w-full h-full`}>
      <div id="TopContent" className="sm:bg-[url('../../public/code-glasses.jpg')] sm:bg-cover sm:bg-no-repeat sm:text-white md:h-[100vh]">
        <div id="header" className="flex justify-between p-2 px-4 relative sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" id="Logo" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:text-white sm:svg-sm">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" id="Burger-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={(e) => burgerClickedHandler(e)} className="w-6 h-6 cursor-pointer sm:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>

        <Navigation hidden = {NavHidden}/>

        <div id="body" className="p-4 mt-12 text-wrap text-center sm:pb-12 md:mt-18 md:p-4">
          <h1 className="font-bold text-gray-700 text-4xl text-center my-4 select-none sm:text-white sm:px-6 sm:text-4xl md:text-6xl lg:text-7xl">Welcome to the Multi-university transcript system.</h1>
          <span className="text-sm text-center font-light select-none md:text-lg md:shadow-2xl">streamline transcript management across universities.</span>

          <div id="btns" className="my-14 flex justify-center gap-4">
            <Link href={"/signup"} className="border-b-2 p-3 rounded text-md hover:border-b-purple-600 transition-all duration-300 ease-out select-none sm:hover:text-purple-500 md:text-lg md:border-2 md:hover:border-purple-500 md:px-5">
              Sign Up
            </Link>

            <Link href={"#login"} className="border-b-2 p-3 rounded text-md select-none hover:border-b-purple-600 sm:hover:text-purple-500 md:text-lg md:border-2 md:hover:border-purple-500 md:px-5">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <Login />

      {/* About Page */}
      <About />
    </main>
  );
}
