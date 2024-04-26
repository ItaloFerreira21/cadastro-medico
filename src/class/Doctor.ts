export class Doctor {
  //props
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
  telefone: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;

  //contructor
  constructor(
    nome: string,
    crm: string,
    especialidade: string,
    email: string,
    telefone: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string
  ) {
    this.nome = nome;
    this.crm = crm;
    this.especialidade = especialidade;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }

  //methods
}
