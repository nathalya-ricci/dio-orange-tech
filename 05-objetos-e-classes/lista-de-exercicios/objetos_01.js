/*
  1) Crie uma classe para representar carros.
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
  Crie um método que, dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  // atributos
	marca;
	cor;
	gastoMedioPorKm;

	constructor(marca, cor, gastoMedioPorKm) {
		this.marca = marca;
		this.cor = cor;
		this.gastoMedioPorKm = gastoMedioPorKm;
	}

	calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
		return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel; // usar this pra chamar um atributo
	}
}

const uno = new Carro("Fiat", "preto", 1 / 12);
console.log(uno.calcularGastoDePercurso(24, 5));

const corolla = new Carro("Toyota", "branco", 1 / 10);
console.log(corolla.calcularGastoDePercurso(50, 5));
