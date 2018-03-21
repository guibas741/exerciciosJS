function playRandomNumber(numeroInformado) {
    const number = Math.floor((Math.random() * 10));
    if(number == numeroInformado) {
        alert('Acertou o numero ' + number);
    } else {
        alert('Errou o numero ' + number);
    }
    
}