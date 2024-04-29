import { BasisPage } from "@/components/generics/basisPage";
import { FormPatient } from "@/components/patients/form";

export const Pacientes = () => {
  return (
    <BasisPage headerTitle="Pacientes" formComponent={<FormPatient />} />
  );
};