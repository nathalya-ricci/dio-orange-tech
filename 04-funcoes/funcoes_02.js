// Escrever função que retorna o seu nome

function sayMyName(name) {
	return name;
}

sayMyName("Lya");

// Escrever função que retorna se você é ou não maior de idade

function verificarMaioridade(idade) {
	if (idade >= 18) {
		console.log(sayMyName("Lya") + ", você é maior de idade");
	} else {
		console.log(sayMyName("Lya") + ", você é menor de idade");
	}
}

verificarMaioridade(23);
