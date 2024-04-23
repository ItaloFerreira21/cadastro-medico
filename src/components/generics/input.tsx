interface inputProps {
  label: string,
  placeholder: string
}

export const InputGeneric = ({ label, placeholder }: inputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-blue-800 text-sm font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        className="border-blue-800 input px-[10px] py-2 text-base bg-white border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-gray-600 placeholder:text-base "
      />
    </div>
  )
}