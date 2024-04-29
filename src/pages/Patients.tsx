import { BasisPage } from "@/components/generics/basisPage";
import { PatientsBasisContent } from "@/components/patients/basisContent";
import { FormPatient } from "@/components/patients/form";

export const Pacientes = () => {
  return (
    <BasisPage
      basisContent={<PatientsBasisContent />}
      headerTitle="Pacientes"
      formComponent={<FormPatient />}
    />
  );
};