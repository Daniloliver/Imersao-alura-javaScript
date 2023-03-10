const area = prompt(
    "Você quer seguir para a área de 'Front-End' ou de 'Back-End'? Digite o nome da área:"
  );
  let ling_prog = "";

  if (area === "Front-End") {
    ling_prog = prompt("Você quer aprender React ou Vue");
} else if (area === "Back-End") {
    ling_prog = prompt("Você quer aprender C# ou Java?");
  } else {
    alert("Você não inseriu uma área válida!");
  }
  
  const espe_Ou_Fullstack = prompt(
    "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"
  );
  if (espe_Ou_Fullstack == 1) {
    alert(
      `Continue se especializando em ${ling_prog} para dominar a área de ${area}!`
    );
  } else if (espe_Ou_Fullstack == 2) {
    alert(
      `Chegou a hora de começar a aprender outras linguagens além de ${ling_prog} se você quer se tornar Fullstack!`
    );
  } else {
    alert("Você não inseriu um valor válido!");
  }
  
  let msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo´."
  );
  while (msg === "ok") {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo"
    );
  }

