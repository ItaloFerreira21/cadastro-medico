import Card from "../generics/Card"

export const DoctorsBasisContent = () => {
  return (
    <div className="py-5 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="flex gap-3 items-center">
          <p className="text-xl font-medium text-[#85C4FF]">
            A
          </p>
          <img src="./iconClinica.svg" alt="" />
        </h3>
        <Card />
        <Card />

      </div>
      <div className="flex flex-col gap-2">
        <h3 className="flex gap-3 items-center">
          <p className="text-xl font-medium text-[#85C4FF]">
            B
          </p>
          <img src="./iconClinica.svg" alt="" />
        </h3>
        <Card />

      </div>
    </div>
  )
}