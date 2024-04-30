
import { PublicDataPatient } from "@/class/PublicDataPatient";
import { API } from "@/scripts/fetchAPI"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export const PatientsBasisContent = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    API("paciente", "?sort=nome").then((contentData) => {
      setContent(contentData);
    });

  }, []);
  const patients = content.map((patient: PublicDataPatient) => {
    return new PublicDataPatient(patient.id, patient.nome, patient.cpf, patient.email, patient.telefone)
  })

  return (
    <section className="py-4">
      <div className="">
        <h1 className="text-blue-500 font-medium flex items-center text-xl gap-3">
          A
          <img src="./Logo.png" />
        </h1>
        {patients.length != 0 ? patients.map((patient: PublicDataPatient) => (
          <>

            <ul className="p-2 flex flex-col" key={patient.email}>
              <li className="flex w-full justify-between items-center">
                <div className="flex flex-col leading-5">
                  {patient.nome}
                  <span className="text-[#716e6ed7] text-sm">
                    {patient.telefone}
                  </span>
                </div>
                <ChevronDown />
              </li>
              <i className="w-full bg-gray-400 h-px my-2"></i>
            </ul>
          </>


        )) : <div>
          Nenhum paciente cadastrado
        </div>}


      </div>
    </section>
  )
}