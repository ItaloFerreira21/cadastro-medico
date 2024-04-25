import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"


interface inputProps {
  value: string
  label: string,
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
interface InputGenericSelectProps {
  handleSpecialty: (value: string) => void;
  option1: string
  option2: string
  option3: string
  option4: string

}




export const InputGeneric = ({ label, value, placeholder, onChange }: inputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-[#add8e6 text-sm font-medium relative top-2 ml-[7px] px-[3px] bg-white w-fit">
        {label}
      </label>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        name="input"
        className="border-[#add8e6] input px-[10px] py-2 text-base bg-white border rounded-[5px] w-full focus:outline-none placeholder:text-gray-600 placeholder:text-base outline-none"
        onChange={onChange}
      />
    </div>
  )
}
export const InputGenericSelect = ({ handleSpecialty, option1, option2, option3, option4 }: InputGenericSelectProps) => {



  return (
    <Select onValueChange={handleSpecialty}>
      <SelectTrigger
        className="w-[180px] border-[#add8e6] input px-[10px] py-2 text-base bg-white border rounded-[5px] focus:outline-none placeholder:text-gray-600 placeholder:text-base mt-5"

      >
        <SelectValue placeholder={option1} />
      </SelectTrigger>
      <SelectContent  >
        <SelectItem value={option1}>{option1}</SelectItem>
        <SelectItem value={option2}>{option2}</SelectItem>
        <SelectItem value={option3}>{option3}</SelectItem>
        <SelectItem value={option4}>{option4}</SelectItem>

      </SelectContent>
    </Select>

  )
}