export const ConsultasBasisContent = () => {
  return (
    <div className="w-[360px] h-[792px] ">
      <div className="w-40 h-6 pt-6 flex ">
        <h3>Hoje (data)</h3>
        <div className="py-[4.5px] pl-2">
          <svg
            width="34"
            height="17"
            viewBox="0 0 34 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5996 3.14805L27.8876 4.11068L19.0156 13.4947L17.3623 12.7987L17.8583 0.505341H20.1463L19.5276 9.95873L25.5996 3.14805Z"
              fill="#85C4FF"
            />
            <path
              d="M13.3651 0.5H15.6611L16.0238 13.004L14.3651 13.684L5.5918 4.20664L7.88779 3.26797L13.8878 10.1427L13.3651 0.5Z"
              fill="#85C4FF"
            />
            <path
              d="M3.25334 7.99596L4.216 5.70807L13.6 14.5801L12.904 16.2333L0 16.1827L0.962663 13.8974L10.064 14.068L3.25334 7.99596Z"
              fill="#85C4FF"
            />
            <path
              d="M23.2132 14.0626L32.3199 13.9853L33.2585 16.284L20.3492 16.1987L19.6719 14.5374L29.1465 5.76666L30.0852 8.06263L23.2132 14.0626Z"
              fill="#85C4FF"
            />
          </svg>
        </div>
      </div>

      <div className="w-[312px] h-[232px] pt-4 top-[215px] ">
        <h3 className="pt-4 font-bold text-blue-800">
          9:00
          <h4 className="pt-6 font-normal text-blue-600">
            Nome do medico
            <p className="font-light text-gray-500">especialidade | CRM </p>
          </h4>
          <h4 className="pt-6 font-normal text-blue-600">
            Nome do paciente
            <p className="font-light text-gray-500 pb-2">Paciente</p>
          </h4>
        </h3>
        <div className="border border-blue-950" w-full></div>

        <h3 className="pt-6 font-bold text-blue-800">10:00</h3>
      </div>
      <div className="flex gap-3 pt-12 ">
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Editar
        </button>
      
      
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Cancelar consulta
        </button>
      </div>
    </div>
  );
};
