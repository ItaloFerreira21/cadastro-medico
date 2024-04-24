
import { Search } from "lucide-react"
import { DoctorHeader } from "./header"
import { RegisterNewProfileFooter } from "../generics/FooterNewProfiler"






export const DoctorsPage = () => {
  return (
    <div className="w-full">
      <DoctorHeader />
      <div className="p-4">
        <div className="flex w-full border border-neutral-700 justify-between p-4 rounded-[6px] ">
          <input type="text" placeholder="Pesquisar" className="placeholder:text-gray-600 w-[89%] outline-none" />
          <Search className="text-gray-600" />
        </div>
      </div>




      <RegisterNewProfileFooter />


    </div>

  )
}