import { Link } from "react-router-dom"
import { Header } from "./header"

export const HomeIndex = () => {
  const button = ` flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3  px-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce`
  return (
    <div className="flex flex-col items-center  space-y-6 py-20">
      <Header />
      <div className="  px-9 text-base font-bold leading-5">
        <h2>Escolha qual seção deseja iniciar:</h2>
      </div>
      <div className=" space-y-4 flex flex-col" >
        <Link to={"/medicos"}
          className={button}
        >
          Médicos(as)
        </Link>
        <button
          className={button}
        >
          Pacientes
        </button>
        <button
          className={button}
        >
          Consultas
        </button>
      </div>
    </div>
  )
}