// Classe é a definição do que deve ser o objeto

class Pessoa {
	nome;
	idade;
	anoDeNascimento;

	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2022 - idade;
	}

	descrever() {
		console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
	}
}

// Instância é uma ocorrência do objeto

// Usar o constructor() vai obrigar a passar os parâmetros quando criar uma nova Pessoa
const lya = new Pessoa("Lya", 23);
const yoko = new Pessoa("Yoko", 3);

lya.descrever();
yoko.descrever();

console.log(lya);
