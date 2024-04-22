import { Link } from "react-router-dom";

export const Medicos = () => {
  return (
    <div>
      <div className="flex gap-4 bg-blue-800 max-w-[360px] h-[50px] ">
        <div className="py-3 ">
          <Link
            to={"/"}
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
            title="Go Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className="stroke-white"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              ></path>
            </svg>
          </Link>
        </div>
        <h2 className="w-70 h-22 font-sans text-white font-normal text-lg py-3 ">
          Médicos
        </h2>
        <div className=" py-2 pl-48 justify-end">
          <label>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input className="hidden peer" type="checkbox" />
              <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="input w-80 h-14 mx-4">
        <div className="flex flex-col w-80 h-14 ">
          <label className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
            Nome:
          </label>
          <input
            id="nome"
            type="string"
            placeholder="Pesquisar"
            name="input"
            className="border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
          />
        </div>
      </div>
    </div>
  );
};
