import Image from "next/image"
import Link from "next/link"

const Card = ({pokemon}) => {
  return (
    <div 
      className='
        inline-flex 
        flex-col 
        justify-center 
        items-center 
        w-[23%] 
        rounded-xl 
        py-[2em] 
        px-[1em] 
        mb-[2em]
        border-[2px]
        border-[#e33d33]
        shadow-xl
        shadow-zinc-500
        text-white
        bg-zinc-700
      '
    >
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={"120"}
        height={"120"}
        alt={pokemon.name}
      />
      <p
        className="
          my-[1em] 
          mx-0 
          bg-[#e33d33] 
          rounded-md
          p-1
          text-white
          flex
          items-center
          justify-center
        "
      >
        #{pokemon.id}
      </p>
      <h3 className='text-[1.5rem] capitalize mb-[1em]'>{pokemon?.name}</h3>
      <Link className="bg-white text-zinc-900 py-[0.7em] px-[1.2em] rounded-md font-bold duration-500 hover:bg-[#e33d33] hover:text-white" href={`/pokemon/${pokemon?.id}`}>
        Detalhes
      </Link>
    </div>
  )
}

export default Card