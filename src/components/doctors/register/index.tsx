import {
  InputGeneric,
  InputGenericSelect,
} from "@/components/generics/input";

export const FormRegisterDoctor = () => {
  return (
    <div className="flex h-screen py-4 overflow-scroll flex-col">
      <form className="p-4 w-full">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-medium text-xl -my-2 text-primaryBlue">Profissional</h3>
            <InputGeneric label="Nome" placeholder="Nome completo" />
            <div className="flex items-center gap-4 outline-none">
              <InputGenericSelect
                valor1="Ortopedia"
                valor2="Cardiologia"
                valor3="Ginecologia"
                valor4="Dermatologia"
                placeholder="Especidalidade"
              />
              <InputGeneric label="CRM" placeholder="CRM" />
            </div>
          </div>
          <div className="">
            <h3 className="font-medium text-xl -my-2 text-primaryBlue">Contatos</h3>
            <InputGeneric placeholder="E-mail" label="E-mail" />
            <InputGeneric placeholder="Telefone ou celular" label="Telefone " />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-xl -my-2 text-primaryBlue">Endereço profissional</h3>
            <div className="flex gap-3">

              <InputGeneric placeholder="CEP" label="CEP" />
              <InputGeneric placeholder="UF" label="UF" />
            </div>

            <InputGeneric placeholder="Rua" label="Logradouro" />
            <div className="flex gap-3">
              <InputGeneric placeholder="Número" label="Número" />
              <InputGeneric placeholder="Complemento" label="Complemento" />
            </div>
            <InputGeneric placeholder="Cidade" label="Cidade" />
            <InputGeneric placeholder="Bairro" label="Bairro" />

          </div>
        </div>


      </form>

    </div>
  );
};
