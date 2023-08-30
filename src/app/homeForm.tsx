import { FormEvent } from "react";
import Link from "next/link";

export default function HomeForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const response = await fetch('api/submit', {
          method: 'POST',
          body:formData,
        })
    
        // Handle response if necessary 
        const data = await response.json()
        // .. 
    
    }
    
    return (
      // <form onSubmit={onSubmit}>
      // Let the form be like a card in the page
      <form>
        <h2>Log In to Account</h2>
        <input 
          className="my-10"
          type="email" 
          name="name" 
          id="email" 
        />
        <br />
        <input type="password" name="name" />
        <button type="submit">Sign in</button>

        <p>Don't have an account? <Link href={"/somewhere"}>Sign Up</Link> </p>
      </form>
    )
}