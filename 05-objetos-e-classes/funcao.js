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

function compararPessoas(pessoa1, pessoa2) {
	if (pessoa1.idade > pessoa2.idade) {
		console.log(`${pessoa1.nome} é mais velha que ${pessoa2.nome}`);
	} else if (pessoa2.idade > pessoa1.idade) {
		console.log(`${pessoa2.nome} é mais velha que ${pessoa1.nome}`);
	} else {
		console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade`);
	}
}

const lya = new Pessoa("Lya", 23);
const yoko = new Pessoa("Yoko", 3);

compararPessoas(lya, yoko);
