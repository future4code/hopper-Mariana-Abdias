```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
      const novoArrayAnimais = animais.map((item) => {
      return item.nome;
      });
      console.log(novoArrayAnimais);
}
criarArrayNomesAnimais()

```