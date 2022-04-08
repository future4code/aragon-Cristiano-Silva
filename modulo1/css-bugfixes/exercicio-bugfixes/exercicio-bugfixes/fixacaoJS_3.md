```
function calculaNota(ex, p1, p2) {
    let notaProva1 = p1
    let notaProva2 = p2
    let notaExercicios = ex
    
    let resultado = notaProva1 + notaProva2 + notaExercicios 
    let media = resultado / 3
    
    if (media >= 9){
      return A
    }else if (media >= 7.5){
      return B
    }else if (media >= 6 ){
      return C
    } else  {
      return D
    }
    
  }

```  