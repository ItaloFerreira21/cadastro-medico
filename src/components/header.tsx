import logo1 from "../assets/logo1.svg";
export function Header() {
  return (
    <div className="flex flex-col space-y-6 px-8 py-16 ">
      <div className=" space-y-6 px-8">
        <img src={logo1} />
        <h1 className=" pb-2 text-base font-bold leading-5 text-blue-950">Gerenciando Sua Clinica</h1>
      </div>

      <div className=" space-y-6 py-11 px-9 pb-2 text-base font-bold leading-5">
        <h2>Escolha qual seção deseja iniciar:</h2>
      </div>
      <div className=" space-y-4 px-8 " >
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
        px-8 rounded-xl shadow-lg 
        transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Médicos(as)
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
          px-8 rounded-xl shadow-lg 
          transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
          Pacientes
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
          px-8 rounded-xl shadow-lg 
          transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
          Consultas
        </button>
      </div>
    </div>
  );
}
