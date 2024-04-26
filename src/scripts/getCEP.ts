export const buscaCep = (
  cep: string,
  setLogradouro: React.Dispatch<React.SetStateAction<string>>,
  setBairro: React.Dispatch<React.SetStateAction<string>>,
  setCidade: React.Dispatch<React.SetStateAction<string>>,
  setUf: React.Dispatch<React.SetStateAction<string>>,
  setCepValido: React.Dispatch<React.SetStateAction<boolean>>
) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((result) => {
      setCepValido(true);
      setLogradouro(result.logradouro);
      setBairro(result.bairro);
      setCidade(result.localidade);
      setUf(result.uf);
    })
    .catch((error) => {
      setCepValido(false);
      console.log(error);
    });
};
