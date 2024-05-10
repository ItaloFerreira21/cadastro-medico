import { useState } from "react";

export const ConsultasBasisContent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-[360px] h-[792px] flex flex-col ">
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

      <div className="w-auto h-[232px] pt-8  ">
        <div className="flex items-center justify-center  ">
          <div className="w-full rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
            <div className="flex justify-end ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close" : "Open"}
                data-dismiss-target="#toast-notification"
                className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                type="button"
              >
                <span className="sr-only">{isOpen ? "Close" : "Open"}</span>
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            {isOpen && (
              <>
                <h3 className=" pt-2 font-bold text-blue-800 ">9:00</h3>

                <h4 className="pt-2 font-normal text-blue-600">
                  Nome do medico
                  <p className="font-light text-gray-500">
                    especialidade | CRM{" "}
                  </p>
                </h4>
                <h4 className="pt-2 font-normal text-blue-600">
                  Nome do paciente
                  <p className="font-light text-gray-500 pb-2">Paciente</p>
                </h4>

                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                  >
                    Editar
                  </a>
                  <a
                    href="#"
                    className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Excluir
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
