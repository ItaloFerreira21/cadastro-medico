/* eslint-disable @typescript-eslint/no-unused-vars */


import { FormEvent, useEffect, useState } from "react";
import { DrawerClose, DrawerFooter } from "../ui/drawer";
import { Button } from "../ui/button";
import { Doctor } from "@/class/Doctor";
import { buscaCep } from "@/scripts/getCEP";
import { InputGeneric, InputGenericSelect } from "../generics/input";


export const FormDoctor = () => {
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

  const [cepValido, setCepValido] = useState<boolean>(true);




  const handleChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };
  const handleSpecialty = (value: string) => {
    setSelectSpecialty(value)
  }


  const putData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const doctor = new Doctor(nome, crm, selectSpecialty, email, telefone, cep, logradouro, numero, complemento, bairro, cidade, uf)
    console.log(doctor)

  }
  useEffect(() => {
    if (cep.length >= 8) {
      const normalizeCEP = cep.replace(/\D/g, "");
      buscaCep(normalizeCEP, setLogradouro, setBairro, setCidade, setUf, setCepValido);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);


  return (

    <form className="p-4 w-full flex flex-col gap-8 " onSubmit={putData}>
      <div className="flex flex-col gap-6 overflow-y-scroll">
        <div>
          <h3 className="font-medium text-xl text-primaryBlue">Profissional</h3>
          <InputGeneric
            required={true}

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
              required={true}
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
            required={true}
            value={email}
            placeholder="E-mail"
            label="E-mail"
            onChange={handleChange(setEmail)}
          />
          <InputGeneric
            required={true}
            value={telefone}
            placeholder="Telefone ou celular"
            label="Telefone "
            onChange={handleChange(setTelefone)} />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-xl -my-2 text-primaryBlue">Endereço profissional</h3>
          <div className="flex gap-3">
            <div>
              <InputGeneric
                required={true}
                value={cep}
                placeholder="CEP"
                label="CEP"
                onChange={handleChange(setCep)} />
              {cepValido ? null : <span className="pl-2 text-red-600">CEP inválido</span>}

            </div>

            <InputGeneric
              required={true}
              value={uf}
              placeholder="UF"
              label="UF"
              onChange={handleChange(setUf)} />
          </div>

          <InputGeneric
            required={true}
            value={logradouro}
            placeholder="Rua"
            label="Logradouro"
            onChange={handleChange(setLogradouro)} />
          <div className="flex gap-3">
            <InputGeneric
              required={false}
              value={numero}
              placeholder="Número"
              label="Número"
              onChange={handleChange(setNumero)} />
            <InputGeneric
              required={false}
              value={complemento}
              placeholder="Complemento"
              label="Complemento"
              onChange={handleChange(setComplemento)} />
          </div>
          <InputGeneric
            required={true}
            value={cidade}
            placeholder="Cidade"
            label="Cidade"
            onChange={handleChange(setCidade)} />
          <InputGeneric
            required={true}
            value={bairro}
            placeholder="Bairro"
            label="Bairro"
            onChange={handleChange(setBairro)} />

        </div>
      </div>
      <DrawerFooter className=" flex w-full items-center">
        <Button
          className="bg-primaryBlue hover:bg-primaryBlue-dark text-white font-bold rounded-[6px] focus:outline-none focus:shadow-outline w-[90%] p-4 items-center flex justify-center py-6 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse"
          type="submit"

        >
          Concluir cadastro
        </Button>


        <DrawerClose className="w-full flex justify-center">
          <Button
            className="bg-zinc-50 hover:bg-primaryBlue-dark text-primaryBlue border-primaryBlue border-2 font-bold rounded-[6px] focus:outline-none focus:shadow-outline w-[90%] p-4 py-6 items-center flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse">
            Cancelar
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </form>


  );
};
