import { FormEvent } from "react";
// import { Montserrat } from 'next/font/google';
import HomeForm from "./homeForm";
import Image from "next/image";
import logoWhite from "../../public/logo-white.png";
import logoBlack from "../../public/logo-black.png";

// const montserrat = Montserrat({subsets: ['latin']});

function Home() {

  return (
    <main className="m-0 flex items-center justify-center w-[100vw]  flex-col">
      {/* Top banner */}
      <div 
        id="logo-navigations"
        className={`flex absolute top-0 left-0 align-center justify-between p-5 w-full h-[17vh]`}
      >
        <Image 
          src={logoWhite}
          width={70}
          height={70}
          alt={"logo"}
          className="mr-2"
        />

        <nav className="self-center ml-auto flex gap-5">
          <a href="#sign-in">Sign In</a>
          <a href="#sign-up">Sign Up</a>
        </nav>
      </div>

      {/* Intro Section */}
      <div id="intro" className="mt-[18vh] w-max-full">
        <h1 className={""}>
          Welcome to the Multi-University Transcript System.
        </h1>
        <p>Streamline Transcript Management Across Universities.</p>
      </div>

      {/* Sign in form */}
      <HomeForm />
      
      {/* Footer Section */}
      <div id="footer">
        <h2>Developed by <span>Electron</span></h2>
        <h4>© 2023</h4>

        <div id="socials">
          <a href="">Twitter</a>
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
        </div>
        {/* COnvert to Tailwind enabled styling */}
        {/* <div style="margin-top:-23px">
          <div class="bg-primary" style="margin-top:0px;height:23px"></div>
          <div class="bg-primary" style="margin-top:1px;height:22px"></div>
          <div class="bg-primary" style="margin-top:2px;height:21px"></div>
          <div class="bg-primary" style="margin-top:3px;height:20px"></div>
          <div class="bg-primary" style="margin-top:4px;height:19px"></div>
          <div class="bg-primary" style="margin-top:5px;height:18px"></div>
          <div class="bg-primary" style="margin-top:6px;height:17px"></div>
          <div class="bg-primary" style="margin-top:7px;height:16px"></div>
          <div class="bg-primary" style="margin-top:8px;height:15px"></div>
          <div class="bg-primary" style="margin-top:9px;height:14px"></div>
          <div class="bg-primary" style="margin-top:10px;height:13px"></div>
          <div class="bg-primary" style="margin-top:11px;height:12px"></div>
          <div class="bg-primary" style="margin-top:12px;height:11px"></div>
          <div class="bg-primary" style="margin-top:13px;height:10px"></div>
          <div class="bg-primary" style="margin-top:14px;height:9px"></div>
          <div class="bg-primary" style="margin-top:15px;height:8px"></div>
          <div class="bg-primary" style="margin-top:16px;height:7px"></div>
          <div class="bg-primary" style="margin-top:17px;height:6px"></div>
          <div class="bg-primary" style="margin-top:18px;height:5px"></div>
          <div class="bg-primary" style="margin-top:19px;height:4px"></div>
          <div class="bg-primary" style="margin-top:20px;height:3px"></div>
          <div class="bg-primary" style="margin-top:21px;height:2px"></div>
          <div class="bg-primary" style="margin-top:22px;height:1px"></div>
          <div class="bg-primary" style="margin-top:23px;height:0px"></div>
        </div> */}
      </div>
    </main>
  )
}

export default Home;