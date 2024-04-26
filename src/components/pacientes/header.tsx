import { Link } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { useState } from "react"
import { Menu, X } from 'lucide-react';

export const PacientesHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true)
  return (
    <div className="flex items-center justify-between p-4 gap-4 bg-primaryBlue ">
      <div className="flex items-center gap-5 ">
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
        <h2 className=" text-white text-lg font-medium ">
          Pacientes
        </h2>
      </div>
      <Popover >
        <PopoverTrigger onClick={() => openMenu ? setOpenMenu(false) : setOpenMenu(true)} >
          {openMenu ? <Menu color="#FFF" /> : <X color="#FFF" />}
        </PopoverTrigger>
        <PopoverContent className=" shadow-lg mr-24  w-[80%] rounded-[6px] bg-zinc-100 flex text-primaryBlue">
          <ul className="flex flex-col  w-full items-center  ">
            <li className="hover:underline p-2 w-full justify-center flex border-b border-px border-gray-200">Medicos</li>
            <li className="hover:underline p-2 w-full justify-center flex border-b border-px border-gray-200">Pacientes</li>
            <li className="hover:underline p-2 w-full justify-center flex ">Consultas</li>
          </ul>
        </PopoverContent>
      </Popover>


    </div>
  )
}