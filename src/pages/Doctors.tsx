import { FormDoctor } from "@/components/doctors/form";
import { BasisPage } from "../components/generics/basisPage";
import { DoctorsBasisContent } from "@/components/doctors/basisContent";

export const Doctors = () => {
  return (
    <BasisPage
      basisContent={<DoctorsBasisContent />}
      headerTitle="Medicos"
      formComponent={<FormDoctor />}
    />
  );
};
