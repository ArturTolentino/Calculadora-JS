function calcular(n1, n2) {
  n1 = parseFloat(document.getElementById("n1").value)
  n2 = parseFloat(document.getElementById("n2").value)

  let resultado = document.getElementById("resultado")

  selector = document.getElementById("selector").value

  switch(selector){
    case '+':
      calculo = (n1 + n2)
      resultado.innerHTML = `O Resultado da soma de ${n1} + ${n2} é = ${calculo}`
      break;

      case '-':
      calculo = (n1 - n2)
      resultado.innerHTML = `O Resultado da subtração de ${n1} - ${n2} é = ${calculo}`
      break;

      case '*':
      calculo = (n1 * n2)
      resultado.innerHTML = `O Resultado da multiplicação de ${n1} * ${n2} é = ${calculo}`
      break;

      case '/':
      calculo = (n1 / n2)
      resultado.innerHTML = `O Resultado da divisão de ${n1} / ${n2} é = ${calculo}`
      break;
      default:console.log("ERRO");
  }
}