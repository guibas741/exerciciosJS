function verificaIdade(anoNascimento) {
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;

    if(idade < 18) {
        alert('Idade ' + idade + ' é de menor!');
    } else {
        alert('Idade ' + idade + ' é de maior!');
    }
}