import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav 
      className="flex justify-between items-center py-[1em] px-[1.2em] mb-[2em] bg-zinc-800 text-white"
    >
      <div className="flex justify-center items-center gap-2">
        <Image src={"/images/pokeball.png"} width={"30"} height={"30"} alt="PokeNext"/>
        <h1 className="text-[2rem] font-bold">Poke<span className="text-red-600">Next</span></h1>
      </div>
      <ul className="flex gap-4">
        <li className="border-b-2 border-transparent hover:border-white duration-500">
          <Link className="font-semibold text-[1.2rem]" href={"/"}>Home</Link>
        </li>
        <li className="border-b-2 border-transparent hover:border-white duration-500">
          <Link className="font-semibold text-[1.2rem]" href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar