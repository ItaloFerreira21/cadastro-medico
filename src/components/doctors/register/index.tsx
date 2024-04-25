import {
  InputGeneric,
  InputGenericSelect
} from "@/components/generics/input";
import { useState } from "react";


export const FormRegisterDoctor = () => {
  const [nome, setNome] = useState<string>('');
  const [crm, setCrm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [uf, setUf] = useState<string>('');
  const [selectSpecialty, setSelectSpecialty] = useState('');

  const handleChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };
  const handleSpecialty = (value: string) => {
    setSelectSpecialty(value)
    console.log(selectSpecialty)
  }


  return (

    <div className="flex flex-col gap-6 overflow-y-scroll">
      <div>
        <h3 className="font-medium text-xl text-primaryBlue">Profissional</h3>
        <InputGeneric
          value={nome}
          placeholder="Nome completo"
          label="Nome"
          onChange={handleChange(setNome)}
        />
        <div className="flex items-
            center gap-4 outline-none">
          <InputGenericSelect
            handleSpecialty={handleSpecialty}
            option1="Ortopedia"
            option2="Cardiologia"
            option3="Ginecologia"
            option4="Dermatologia"

          />
          <InputGeneric
            value={crm}
            label="CRM"
            placeholder="CRM"
            onChange={handleChange(setCrm)}
          />
        </div>
      </div>
      <div className="">
        <h3 className="font-medium text-xl -my-2 text-primaryBlue">Contatos</h3>
        <InputGeneric
          value={email}
          placeholder="E-mail"
          label="E-mail"
          onChange={handleChange(setEmail)}
        />
        <InputGeneric
          value={telefone}
          placeholder="Telefone ou celular"
          label="Telefone "
          onChange={handleChange(setTelefone)} />
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-xl -my-2 text-primaryBlue">Endereço profissional</h3>
        <div className="flex gap-3">

          <InputGeneric
            value={cep}
            placeholder="CEP"
            label="CEP"
            onChange={handleChange(setCep)} />
          <InputGeneric
            value={uf}
            placeholder="UF"
            label="UF"
            onChange={handleChange(setUf)} />
        </div>

        <InputGeneric
          value={logradouro}
          placeholder="Rua"
          label="Logradouro"
          onChange={handleChange(setLogradouro)} />
        <div className="flex gap-3">
          <InputGeneric
            value={numero}
            placeholder="Número"
            label="Número"
            onChange={handleChange(setNumero)} />
          <InputGeneric value={complemento}
            placeholder="Complemento"
            label="Complemento"
            onChange={handleChange(setComplemento)} />
        </div>
        <InputGeneric
          value={cidade}
          placeholder="Cidade"
          label="Cidade"
          onChange={handleChange(setCidade)} />
        <InputGeneric
          value={bairro}
          placeholder="Bairro"
          label="Bairro"
          onChange={handleChange(setBairro)} />

      </div>
    </div>



  );
};
