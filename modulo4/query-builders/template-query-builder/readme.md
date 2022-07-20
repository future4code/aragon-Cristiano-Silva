----------------------------------------Documentação requisições HTTP-----------------------------------------

|ENDPOINT POST - Adiciona um novo perfume passando as propriedades name, brand, price e ml

{
  "perfume": {
    "id": "1658260890234",
    "name": "Ferrari ",
    "brand": "Masculino",
    "price": 250,
    "ml": 100
  },
  "message": "Perfume successfully added!"
}

|ENDPOINT GET - Retorna Lista de todos os perfumes ou especificando nome ou marca na queryparams

{
  "message": "Sucess!",
  "perfumes": [
    {
      "id": "01",
      "name": "I love love",
      "brand": "Moschino",
      "price": 999,
      "ml": 100
    },
}

|ENDPOINT PUT - Edita o price no body pegando pelo id do perfume.

novo valor passando no body.
{
    "price": 999
}
retorno da mensagem informando que preço foi alterado com sucess!
{
  "message": "perfume price changed successfully."
}

|ENDPOINT DELETE - Deleta o perfume passando o id do perfume.

retorno

{
  "message": "perfume successfully deleted"
}