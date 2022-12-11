/*
  3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
  Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida a efetuar o cálculo adequado.

  Código Condição de pagamento:

  1- À vista no débito, recebe 10% de desconto;
  2- À vista no dinheiro ou PIX, recebe 15% de desconto;
  3- Em 2x, preço normal de etiqueta sem juros;
  4- Acima de 3x, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 200;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
	console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (formaDePagamento === 2) {
	console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (formaDePagamento === 3) {
	console.log(precoEtiqueta);
} else {
	console.log(precoEtiqueta + precoEtiqueta * 0.1);
}
