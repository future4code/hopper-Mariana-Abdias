``` 
function calculaPrecoTotal(quantidade) {
   let precoMaca = 0
    if (quantidade < 12) {
      precoMaca = 1.30 * quantidade
    } else {
      precoMaca = 1.00 * quantidade
    }
  
  return precoMaca
}

```
