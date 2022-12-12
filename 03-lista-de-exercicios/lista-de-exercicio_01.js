/*
  Faça um algoritmo que, dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

  Média = (nota 1 + nota 2 + nota 3) / 3;

  Classificação:
    - Média abaixo de 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovação.
*/

const calcMedia = (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
};

const media = calcMedia(10, 8, 5);

if (media < 5) {
  console.log("Reprovado(a)");
} else if (media >= 5 && media < 7) {
  console.log("Em recuperação");
} else {
  console.log("Aprovado(a)");
}
