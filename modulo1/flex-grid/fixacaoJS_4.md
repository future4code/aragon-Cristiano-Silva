```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
    let icrem = 0
    for ( num of arrayDeNumeros){
        if(num == numeroEscolhido){
            icrem =+ 1
        }
    }

    if (icrem >0){
        return `O número ${numeroEscolhido} aparece ${increm}x`
    }else {
        return `Número não encontrado`
    }
}

```