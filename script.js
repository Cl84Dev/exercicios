//exercício 1

const exercicio1 = document.getElementById("exercicio1");

let indice = 13;
let soma = 0;
let k = 0;

const somar = () => {
  while (k < indice) {
    k++;
  }

  exercicio1.innerHTML = k;
};

somar();

//exercício 2

const verificaFibo = () => {
  let numeroInformado = Number(document.getElementById("fibo").value);
  let resposta = document.getElementById("resposta");
  let sequenciaFibo = [];
  let numero1 = 0;
  let numero2 = 1;
  let fibo = 0;

  while (fibo < 1000000000) {
    sequenciaFibo.push(fibo);
    fibo = numero1 + numero2;
    numero1 = numero2;
    numero2 = fibo;
  }

  if (sequenciaFibo.indexOf(numeroInformado) !== -1) {
    resposta.innerHTML = "É fibonacci";
  } else {
    resposta.innerHTML = "Não é fibonacci";
  }
};

//exercício 5

const inverterCaracteres = () => {
  let string = document.getElementById("contrario").value;
  let contrario = [];
  string.split("");
  for (let letra of string) {
    contrario.unshift(letra);
  }
  let resultado = contrario.join("");
  document.getElementById("invertido").innerHTML = resultado;
};
