// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const listaNumeros = [14, 3, 1999, 26, 11];

for (let i = 0; i < listaNumeros.length; i++) {
	const numero = listaNumeros[i];

	if (numero % 2 === 0) {
		console.log(numero);
	}
}
