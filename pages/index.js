import Image from "next/image";

import Card from "@/components/Card";

export default function Home({ pokemons }) {
  return (
    <>
     <div className="flex gap-2 justify-center mb-8">
      <Image src={"/images/pokeball.png"} width={"50"} height={"50"} alt="Imagem Pokebola"/>
      <h1 className='text-[2.2rem] font-bold text-center'>Poke<span className="text-red-600">Next</span></h1>
     </div>

      <div className="flex flex-wrap justify-between items-center max-w-[68.75rem] my-0 mx-auto">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}


export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemons index
  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1; 
  })

  return{
    props:{
      pokemons: data.results,
    },
  }
}
