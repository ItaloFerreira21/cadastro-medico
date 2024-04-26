import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { ReactElement } from "react"
interface RegisterNewProfileProps {
  formComponent: ReactElement
}
export const RegisterNewProfile = ({ formComponent }: RegisterNewProfileProps) => {

  return (
    <footer className="fixed bottom-0  w-full  " >
      <Drawer>
        <DrawerTrigger className="w-full shadow-top ">
          <div className="p-4 flex justify-center items-center shadow-2xl">
            <button className="bg-primaryBlue hover:bg-primaryBlue-dark text-white font-bold rounded-[6px] focus:outline-none focus:shadow-outline w-[90%] p-4 items-center flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse ">
              Cadastrar novo perfil
            </button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-screen rounded-none">
          <DrawerHeader>
            <Link to={"/"} className="w-full bg-primaryBlue fixed top-0 p-4 -ml-4 flex text-zinc-50 font-medium text-lg items-center gap-4 z-10 ">
              <ArrowLeft size={30} className="duration-200 hover:scale-125 active:scale-100" />
              Novo perfil
            </Link>
          </DrawerHeader>
          <div className="flex h-screen py-4 flex-col overflow-y-scroll">
            {formComponent}
          </div>
        </DrawerContent>
      </Drawer>


    </footer>
  )
}