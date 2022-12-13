const alunos = ["Lya", "Luna", "Yassin", "Duke"];

// adiciona um item no final do array
alunos.push("Natalie");
console.log(alunos);

// adiciona um item em uma posição específica do array
// vai trocar o Yassin pelo Bruno
alunos[2] = "Bruno";
console.log(alunos);

// remove o último item do array
alunos.pop();
console.log(alunos);

// remove o primeiro item do array
alunos.shift();
console.log(alunos);

// adiciona um item no início do array
alunos.unshift('KD');
console.log(alunos);
