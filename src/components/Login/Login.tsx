"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";


export default function Login () {
    const [isStudent, changeIsStudent] = useState(false);

    const spanClickHandler = (newState:boolean) => {
        changeIsStudent(newState);
    }
    
    return (
        <div id="login" className="w-full bg-white p-4 py-8 md:flex md:flex-col md:justify-center md:px-60 md:pb-16">
            <div id="head" className="my-8">
                <h1 className="my-2 text-3xl md:text-center">Login.</h1>
                <h1 className="text-purple-600 md:text-center">Enter your Login details.</h1>
                <div id="links" className="m-4 flex justify-around">
                    <span className={`border-b-2 p-2 cursor-pointer select-none ${isStudent? "border-b-purple-500": ""}`} onClick={() => changeIsStudent(true)}>Student</span>
                    <span className={`border-b-2 p-2 cursor-pointer select-none ${!isStudent? "border-b-purple-500": ""}`} onClick={() => changeIsStudent(false)}>Admin (University)</span>
                </div>
            </div>
            
            <form action="#" className="flex flex-col justify-around" onSubmit={(e) => e.preventDefault()}>
                <input type="username" className="input" placeholder={`Enter ${isStudent? "Student": "Admin" } username`} />
                <input type="password" className="input" placeholder="Password" />
                <button type="submit" className="my-4 p-2 w-full bg-purple-600 rounded text-white transition duration-300 ease-out hover:shadow-lg">Submit</button>
            </form>

            <p className="my-2 text-md">Don't have an account? <Link href={"/signup"} className="font-light underline">   Sign Up</Link></p>
        </div>
    )
}