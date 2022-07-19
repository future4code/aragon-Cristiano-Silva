GETGet-products
http://localhost:3003/products
Endpoint - Get pega e retorna uma lista de usuários, também podendo filtrar por id, iniciando do número 1, listando no máximo 10 usuários por página e de forma crescente.


POSTPost - Add product
http://localhost:3003/products
Endpoint Post - Adicionando um novo produto, utilizando as propriedades de id, name e price.

BODYraw
{
    "id":"21",
    "name":"playstation",
    "price": 5000
}


DELDelete -Product
http://localhost:3003/products/:id
Endpoint Delete - Deleta um produto pela id.

PATH VARIABLES
id    project1


PUTPut- price product
http://localhost:3003/products/:id
Endpoint Put - Altera o valor do price passando a id no params.

PATH VARIABLES
id
'product1'
BODYraw
{
    "price":2322.00
}

