import { Link } from "react-router-dom"
import { Header } from "./header"


export const HomeIndex = () => {
  const button = ` flex items-center justify-center bg-gradient-to-r from-blue-700 to-primaryBlue hover:from-blue-600 hover:to-blue-800 text-white font-bold w-[90%]  h-[120px] py-3  px-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce`

  return (
    <div className="flex flex-col items-center  space-y-6 py-[10%] ">
      <Header />
      <div className="  px-9 text-base font-bold leading-5">
        <h2>Escolha qual seção deseja iniciar:</h2>
      </div>
      <div className=" space-y-4 flex flex-col w-full items-center" >
        <Link to={"/medicos"}
          className={button}
        >
          Médicos(as)
        </Link>
        <Link to={"/pacientes"}
          className={button}
        >
          Pacientes
        </Link>
        <Link to={"/consultas"}
          className={button}
        >
          Consultas
        </Link>
      </div>
    </div>
  )
}