import { FaGithub } from "react-icons/fa";
import { IoMdHeart, IoMdSearch } from "react-icons/io";

export function Header(){

    return (
        <div className="flex justify-between items-center h-24 p-8 bg-zinc-50 drop-shadow-sm">
            <div>
                <h1 className="text-3xl font-extrabold text-zinc-800 flex flex-row gap-2 ml-32">
                    <FaGithub className="mt-0.5"/>
                    Github Repo Searcher
                </h1>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-zinc-500 ml-10">  
                Mostrando resultados para a busca: Rocketseat
                </h2>
            </div>
            <div className="flex flex-row items-center">
                <div className="-ml-10 ">
                </div>
            </div>
            <div className="flex flex-col items-start ml-4">
                <div className=" text-zinc-600 text-sm flex flex-row gap-1 items-center mr-40">
                    <p>Made with</p>
                    <IoMdHeart size={16}/>
                    <p>by</p>
                </div>
                <p className="font-bold text-2xl -mt-1">
                    Levi Morais
                </p>
            </div>
      </div>
    );
}