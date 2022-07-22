--------------------------------PROJETO LABECOMMERCE BACK-END------------------------------------------

DOCUMENTATION POSTMAN ->


| Endpoint metódo POST - Cadastro de usuário - passando os endPoints id, email e password

{
    "message": "user created successfully",
    "user": {
        "id": "1658421159776",
        "email": "teste@gmail.com",
        "password": "test1234"
    }
}


| Endpoint metódo GET - Busca de todos os usuários

{
    "message": "Users List",
    "users": [
        {
            "id": "101",
            "email": "astrodev@gmail.com",
            "password": "bananinha"
        },
        {
            "id": "102",
            "email": "fulano@gmail.com",
            "password": "qwerty00"
        },
}   }


| Endpoint metódo POST - Criando um novo produto

{
    "message": "new product created successfully",
    "product": {
        "id": "1658451923588",
        "name": "iphone13",
        "price": 435
    }
}

| Endpoint metódo GET - Lista todos os produtos

{
    "message": "new product created successfully",
    "product": {
        "id": "1658451923588",
        "name": "iphone13",
        "price": 435
    }
}

| Endpoint metódo GET - Busca Histórico de compras de usuário detalhando nome,email,price do produto, quantidade e total da compra.


    "message": "purchases list successfully!",
    "result": [
        {
            "email": "astrodev@gmail.com",
            "name": "Webcam",
            "price": 99,
            "quantity": 1,
            "total_price": 99
        },
        {
            "email": "astrodev@gmail.com",
            "name": "Monitor",
            "price": 459.99,
            "quantity": 1,
            "total_price": 459.99
        },
        {
            "email": "astrodev@gmail.com",
            "name": "Teclado Gamer",
            "price": 250,
            "quantity": 2,
            "total_price": 500
        }
    ]
}

