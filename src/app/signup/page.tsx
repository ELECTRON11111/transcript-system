"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function signup():any {
    const [formData, updateFormData] = useState({
        email: "",
        password: "",
        university: "",
        role: "",
        areTermsAgreed: false
    });
    const [errorState, updateErrorState] = useState(true);
    const [emailErrorState, updateEmailErrorState] = useState(true);
    const [passwordErrorState, updatePasswordErrorState] = useState(true);

    const submitHandler = (e:any) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    const handleEmailError = (e: any) => {
        if (e.target.value === "") {
            updateEmailErrorState(true);
        } else {
            updateEmailErrorState(false);
        }
    }

    const handleConfirmPassword = (e: any) => {
        if (e.target.value !== formData.password) {
            updatePasswordErrorState(true);
        } else {
            updatePasswordErrorState(false);
        }
    }

    const handleChange = (event: any) => {
        event.persist();
        const { name, value, type, checked } = event.target;

        // Take previous state and update only the input field changed.
        updateFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox"? checked: value
        }));
    }
     
    return (
        <div id="login" className="w-full bg-white p-4 py-8 md:flex md:flex-col md:justify-center md:px-60 md:pb-16">
            <div id="head" className="my-8">
                <h1 className="my-2 text-3xl md:text-center">Sign Up.</h1>
                <h1 className="text-purple-600 md:text-center">
                    Input the details of your institution <span className="hidden sm:inline">||</span><br className="sm:hidden"/> Create an admin account.
                </h1>
            </div>
            
            <form action="#" className="flex flex-col justify-around" onSubmit={(e) => submitHandler(e)}>
                <input type="email" name="email" className="input" onChange = {(e:any) => {handleChange(e); handleEmailError(e)}} placeholder={`Enter University email`} />
                <input type="password" name="password" onChange = {(e) => {handleChange(e); handleConfirmPassword(e)}} className="input" placeholder="Enter Password" />
                <input type="password" className="input" onChange = {(e) => handleConfirmPassword(e)} placeholder="Confirm Password" />

                {
                    passwordErrorState ? <p className="text-red-700 text-sm">Passwords do not match.</p>
                                : <p className="text-green-700 text-sm">Passwords match, continue ..</p>
                } 

                <select name="university" defaultValue={"bellsTech"} onChange = {(e) => handleChange(e)} id="select_uni" className="input text-gray-400">
                    <option value="bellsTech">Bells University of Technology</option>
                    <option value="Redeemers">Redeemers University</option>
                    <option value="Covenant">Covenant University</option>
                </select>

                <input type="text" name="role" id="role" onChange = {(e) => handleChange(e)} className="input" placeholder="What is your role in the university?"/>
                <div id="terms_and_services" className="flex gap-2 items-baseline">
                    <input type="checkbox" onChange={(e) => {handleChange(e)}} name="areTermsAgreed" />
                    <span> I agree to the <Link href={"#"} className="font-light underline">terms and Conditions.</Link></span>
                </div>
                
                <button type="submit" className={`${formData.areTermsAgreed? "opacity-100": "opacity-60"} my-4 p-2 w-full bg-purple-600 rounded text-white transition duration-300 ease-out hover:shadow-lg`} disabled={!formData.areTermsAgreed}>Submit</button>
            </form>

            <p className="my-2 text-md">Already have an account? <Link href={"/#login"} className="font-light underline">   Log In</Link></p>
        </div>
    )
}
