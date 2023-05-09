import Image from "next/image"

const Pokemon = ({ pokemon }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold uppercase">{pokemon?.name}</h1>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={"200"}
        height={"200"}
        alt={pokemon?.name}
      />
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-2xl font-bold">Número:</h3>
        <p className="p-2 bg-zinc-800 text-white rounded-md">#{pokemon?.id}</p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-2xl font-bold">Tipo:</h3>
        <div className="flex gap-2">
          {pokemon.types.map((item, index) => (
            <span className={`
              py-1 
              px-2 
              rounded-md 
              ${item?.type.name === "electric" && "bg-yellow-400"}
              ${item?.type.name === "water" && "bg-sky-500"}
              ${item?.type.name === "grass" && "bg-green-600"}
              ${item?.type.name === "poison" && "bg-purple-700"}
              ${item?.type.name === "fire" && "bg-[#e33d33]"}
              ${item?.type.name === "bug" && "bg-lime-700"}
              ${item?.type.name === "flying" && "bg-sky-500"}
              ${item?.type.name === "normal" && "bg-zinc-800"}
              ${item?.type.name === "rock" && "bg-zinc-800"}
              ${item?.type.name === "ice" && "bg-sky-400"}
              ${item?.type.name === "ghost" && "bg-purple-700"}
              ${item?.type.name === "dark" && "bg-indigo-900"}
              ${item?.type.name === "fairy" && "bg-indigo-400"}
              ${item?.type.name === "psychic" && "bg-violet-400"}
              ${item?.type.name === "ground" && "bg-yellow-800"}
              ${item?.type.name === "fighting" && "bg-yellow-800"}
              ${item?.type.name === "Steel " && "bg-indigo-900"}
              ${item?.type.name === "dark" && "bg-indigo-900"}
              font-medium 
              text-white`} 
              key={index}
              >
                {item?.type.name}
              </span>
             
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <h4 className="text-xl font-bold">Altura:</h4>
          <p className="font-medium">{pokemon?.height * 10} cm</p>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="text-xl font-bold">Peso:</h4>
          <p className="font-medium">{pokemon?.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon

export const getStaticPaths = async() => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokemons}`)
  const data = await res.json()

  //params
  const paths = data.results.map((pokemon, index) => {
    return{ 
      params: {pokemonID: (index+1).toString()}
    }  
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context) => {
  const id = context.params.pokemonID

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data
    }
  }
}
