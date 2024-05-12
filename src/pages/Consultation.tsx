import { ConsultasBasisContent } from "@/components/consultations/basisContent";
import { FormConsultas } from "@/components/consultations/form";
import { BasisPage } from "@/components/generics/basisPage"

export const Consultas = () => {
  return (
    <BasisPage
      basisContent={<ConsultasBasisContent />}
      headerTitle="Consultas"
      formComponent={<FormConsultas />}
      textButton="Agendar nova consulta"
    />
  );
};