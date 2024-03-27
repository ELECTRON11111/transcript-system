"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function signup():any {
    // const [termsAgreed, changeTermsAgreed] = useState(false);
    
    return (
        <div id="login" className="w-full bg-white p-4 py-8 md:flex md:flex-col md:justify-center md:px-60 md:pb-16">
            <div id="head" className="my-8">
                <h1 className="my-2 text-3xl md:text-center">Sign Up.</h1>
                <h1 className="text-purple-600 md:text-center">
                    Input the details of your institution <span className="hidden sm:inline">||</span><br className="sm:hidden"/> Create an admin account.
                </h1>
            </div>
            
            <form action="#" className="flex flex-col justify-around" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="input" placeholder={`Enter University email`} />
                <input type="password" className="input" placeholder="Enter Password" />
                <input type="password" className="input" placeholder="Confirm Password" />
                <select name="uni_affiliation" id="select_uni" className="input text-gray-400">
                    <option value="bellsTech">Bells University of Technology</option>
                    <option value="Redeemers">Redeemers University</option>
                    <option value="Covenant">Covenant University</option>
                </select>
                <input type="text" name="role" id="role" className="input" placeholder="What is your role in the university?"/>
                <div id="terms_and_services" className="flex gap-2 items-baseline">
                    <input type="checkbox" name="terms_and_conditions" id="" />
                    <span> I agree to the <Link href={"#"}>terms and Conditions.</Link></span>
                </div>
                <button type="submit" className="my-4 p-2 w-full bg-purple-600 rounded text-white transition duration-300 ease-out hover:shadow-lg">Submit</button>
            </form>

            <p className="my-2 text-md">Already have an account? <Link href={"/#login"} className="font-light underline">   Log In</Link></p>
        </div>
    )
}
