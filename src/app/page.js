import Image from "next/image";
import LoginPage from "./Login/page";
import RegisterPage from "./Register/page";
export default function Home() {
  return (
    <>
      <main>
        <h1>Welcome to App</h1>
        <p>Please login or register</p>

        <a href="/Login">Login</a>
        <a href="/Register">Register</a>
      </main>
    </>
  );
}
