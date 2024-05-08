import { ConsultasBasisContent } from "@/components/consultas/basisContent";
import { FormConsultas } from "@/components/consultas/form";
import { BasisPage } from "@/components/generics/basisPage"


 


export const Consultas = () => {
    return (
      <BasisPage
        basisContent={<ConsultasBasisContent />}
        headerTitle="Consultas"
        formComponent={<FormConsultas />}
      />
    );
  };