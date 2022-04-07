```
function calculaPrecoTotal(quantidade) {

    let macasPreco = 1
    let macas = 1.30
    let resultado 
    
    if (quantidade >11){
       resultado = quantidade * macasPreco
    } else {
        resultado = quantidade * macas
    }
    return resultado
}

```