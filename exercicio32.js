function temDota(texto) {
    const existeDota = texto.indexOf('dota') != -1 ;
    
    if(existeDota) {
        alert('Tem dota');
    } else {
        alert('Nao tem dota');
    }
}