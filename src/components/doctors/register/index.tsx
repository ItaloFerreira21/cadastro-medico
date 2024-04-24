import {
  InputGeneric,
  InputGenericMedio,
  InputGenericMenor,
} from "@/components/generics/input";

export const RegisterDoctor = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="ml-4">
        <h3 className="font-bold text-lg leading-5 pb-2 pt-6">Profissional</h3>
        <div className="flex flex-wrap gap-2">
          <InputGeneric label="Nome" placeholder="Nome" />
          <InputGenericMedio
            label="Especialidade"
            placeholder="Especialidade"
          />
          <InputGenericMenor label="CRM" placeholder="CRM" />
        </div>

        <h3 className="font-bold text-lg leading-5 pb-2 pt-6">Contato</h3>
        <div className="flex flex-wrap gap-2">
          <InputGeneric label="Telefone" placeholder="Telefone" />
          <InputGeneric label="Email" placeholder="Email" />
        </div>

        <h3 className="font-bold text-lg leading-5 pb-2 pt-6">
          Endereço profissional
        </h3>
        <div className="flex flex-wrap gap-2">
          <InputGeneric label="Rua" placeholder="Rua" />
          <InputGeneric label="Número" placeholder="Número" />
          <InputGenericMenor label="Complemento" placeholder="Complemento" />
          <InputGeneric label="Cidade" placeholder="Cidade" />
          <InputGenericMedio label="Estado" placeholder="Estado" />
          <InputGenericMenor label="CEP" placeholder="CEP" />
        </div>
      </form>
    </div>
  );
};
