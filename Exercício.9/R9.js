const numero = parseInt(prompt("Digite um numero qualquer: "));
  for(let i = 1; i <= 10; i++) {
    const resultado = i * numero;
    console.log(`${numero} * ${i} = ${resultado}`);
  }