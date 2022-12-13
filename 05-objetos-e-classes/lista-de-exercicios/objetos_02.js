/*
  2) Crie uma classe para representar pessoas.
  Para cada pessoa, teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC.

  Instancie uma pessoa chamada José, que pese 70kg e tenha 1.75 de altura, e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura) {
		// usar o constructor sempre que TODAS as infos forem obrigatórias
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	calcularIMC() {
		// como já existem os dados como atributos, não é necessário usá-los como parâmetros
		return this.peso / (this.altura * this.altura);
	}

	classificarIMC() {
		const IMC = this.calcularIMC();

		if (IMC < 18.5) {
			return "Abaixo do peso";
		} else if (IMC >= 18.5 && IMC < 25) {
			return "Peso normal";
		} else if (IMC >= 25 && IMC < 30) {
			return "Acima do peso";
		} else if (IMC >= 30 && IMC < 40) {
			return "Obesidade";
		} else {
			return "Obesidade grave";
		}
	}
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.calcularIMC(70, 1.75));
console.log(jose.classificarIMC());

const lya = new Pessoa("Lya", 65, 1.65);
console.log(lya.calcularIMC(65, 1.65));
console.log(lya.classificarIMC());
