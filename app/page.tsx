import { log } from "console";
import Image from "next/image";
import Hello from "./components/Hello";

export default function Home() {
  console.log("Home page");
  
  return (
    <>
    <h1>Welcome to Next js</h1>
    <Hello />
    </>
  );
}
