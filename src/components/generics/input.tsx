import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface inputProps {
  label: string,
  placeholder: string
}
interface InputGenericSelectProps {
  placeholder: string
  valor1: string
  valor2: string
  valor3: string
  valor4: string
}




export const InputGeneric = ({ label, placeholder }: inputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-[#404040] text-sm font-medium relative top-2 ml-[7px] px-[3px] bg-white w-fit">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        className="border-[#404040] input px-[10px] py-2 text-base bg-white border rounded-[5px] w-full focus:outline-none placeholder:text-gray-600 placeholder:text-base "
      />
    </div>
  )
}

export const InputGenericMenor = ({ label, placeholder }: inputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-[#404040] text-sm font-medium relative top-2 ml-[7px] px-[3px] bg-white w-fit">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        className="border-[#404040] input px-[10px] py-2 text-base bg-white border rounded-[5px] w-[133px] focus:outline-none placeholder:text-gray-600 placeholder:text-base "
      />
    </div>
  )
}

export const InputGenericSelect = ({ placeholder, valor1, valor2, valor3, valor4 }: InputGenericSelectProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-[#404040] input px-[10px] py-2 text-base bg-white border rounded-[5px] focus:outline-none placeholder:text-gray-600 placeholder:text-base mt-5      ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent  >
        <SelectItem value="1">{valor3}</SelectItem>
        <SelectItem value="2">{valor2}</SelectItem>
        <SelectItem value="3">{valor1}</SelectItem>
        <SelectItem value="4">{valor4}</SelectItem>
      </SelectContent>
    </Select>

  )
}