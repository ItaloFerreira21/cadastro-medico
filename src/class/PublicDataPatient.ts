export class PublicDataPatient {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;

  constructor(
    id: number,
    nome: string,
    cpf: string,
    email: string,
    telefone: string
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}
