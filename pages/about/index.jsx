import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <h1 className="text-[2rem] font-bold">
        Poke<span className="text-red-600">Next</span>
      </h1>

      <p>
        Projeto de estudo usando <span className="font-bold">Nextjs</span> e{" "}
        <span className="text-cyan-600 font-semibold">Tailwind</span>
      </p>

      <Image
        src={"/images/charizard.png"}
        width={"300"}
        height={"300"}
        alt="Imagem charizard"
      />
    </div>
  );
};

export default index;
