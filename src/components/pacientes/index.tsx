import { Search } from "lucide-react";
import { PacientesHeader } from "./header";
import { Link } from "react-router-dom";

export const PacientesPage = () => {
  return (
    <div className="w-full">
      <PacientesHeader />
      <div className="p-4">
        <div className="flex w-full border border-neutral-700 justify-between p-4 rounded-[6px] ">
          <input
            type="text"
            placeholder="Pesquisar"
            className="placeholder:text-gray-600 w-[89%] outline-none"
          />
          <Search className="text-gray-600" />
        </div>
      </div>

      <footer className="fixed bottom-0  w-full ">
        <div className="p-4 flex justify-center items-center shadow-2xl">
          <Link to={"/formulario"} className="bg-primaryBlue hover:bg-primaryBlue-dark text-white font-bold rounded-[6px] focus:outline-none focus:shadow-outline w-[90%] p-4 items-center flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse ">
            Cadastrar novo perfil
          </Link>
        </div>
      </footer>
    </div>
  );
};
