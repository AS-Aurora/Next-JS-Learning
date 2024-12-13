import { log } from "console";
import Image from "next/image";
import Hello from "./components/Hello";

export default async function Home() {

    const response = await fetch('https://dummyjson.com/products')
    if(!response.ok) throw new Error('failed to fetch data')
      const data = await response.json()
      const albums = data.products

    console.log(albums);
    
  return (
    <>
    <h1>Welcome to Next js</h1>

    {albums.map((album: {id: number, title: string}) => (
      <div key={album.id}>
        <h3>{album.title}</h3>
      </div>
    ))}
    </>
  );
}
