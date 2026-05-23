TestFramework.test(
  "textoLimpo deve remover espacos no inicio e fim do texto",
  function () {
    const resultado = textoLimpo("  Ramiro  ");
    TestFramework.assertEquals("Ramiro", resultado);
  },
);

TestFramework.test("calcularValor deve retornar o preco do banho", function () {
  const valor = calcularValor("banho", 12);
  TestFramework.assertEquals(45, valor);
});

TestFramework.test(
  "calcurValor deve adicionar 20% do valor quando o peso for maior que 20",
  function () {
    const valor = calcularValor("banho", 25);
    TestFramework.assertEquals(54, valor);
  },
);

TestFramework.test(
  "cadastrarAtendimento deve adicionar atendimento na lista",
  function () {
    resetarAtendimentos();
    const tamInicial = atendimentos.length;
    cadastrarAtendimento({
      tutor: "Tawan",
      pet: "Everton",
      especie: "Suíno",
      peso: 300,
      servico: "banho",
      data: "2026-05-22",
      observacao: "Só vai na pea",
    });

    TestFramework.assertEquals(tamInicial + 1, atendimentos.length);
  },
);

TestFramework.test(
  "cadastrarAtendimento deve criar atendimento com status pendente",
  function () {
    resetarAtendimentos();

    const atendimento = cadastrarAtendimento({
      tutor: "Tawan",
      pet: "sheldon",
      especie: "equino",
      peso: 200,
      servico: "tosa",
      data: "2026-05-22",
      observacao: "Manso",
    });
    TestFramework.assertEquals("pendente", atendimento.status);
  },
);

TestFramework.test(
  "Cadastrar atendimento deve limpar espacos dos nomes do tutor, pet e obs",
  function () {
    resetarAtendimentos();

    const atendimento = cadastrarAtendimento({
      tutor: " Erlon ",
      pet: " Rene ",
      especie: "bovino",
      peso: 400,
      servico: "consulta",
      data: "2026-05-22",
      observacao: " nenhuma ",
    });
    TestFramework.assertEquals("Erlon", atendimento.tutor);
    TestFramework.assertEquals("Rene", atendimento.pet);
    TestFramework.assertEquals("nenhuma", atendimento.observacao);
  },
);

TestFramework.test(
  "calcularResumo deve contar o total de atendimentos e os pendentes",
  function () {
    resetarAtendimentos();

    cadastrarAtendimento({
      tutor: "Tawan",
      pet: "miau",
      especie: "gato",
      peso: 4,
      servico: "banho",
      data: "2026-05-22",
      observacao: "nenhuma",
    });

    cadastrarAtendimento({
      tutor: "Mariana",
      pet: "joao",
      especie: "cachorro",
      peso: 30,
      servico: "consulta",
      data: "2026-05-22",
      observacao: "se triscar morde",
    });

    const resumo = calcularResumo();
    TestFramework.assertEquals(2, resumo.total);
    TestFramework.assertEquals(2, resumo.pendentes);
    TestFramework.assertEquals(189, resumo.valorPrevisto);
  },
);
