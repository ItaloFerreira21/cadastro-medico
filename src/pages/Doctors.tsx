import { FormDoctor } from "@/components/doctors/form";
import { BasisPage } from "../components/generics/basisPage";

export const Doctors = () => {
  return (
    <BasisPage headerTitle="Medicos" formComponent={<FormDoctor />} />
  );
};
