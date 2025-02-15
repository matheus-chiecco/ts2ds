namespace empresa{
    let p = new pessoa();
    p.nome = "Geovana";
    p.anoNasc = 2008;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
}