export type TProduct = {
    id: string,
    name: string,
    price: number
}

export class Product {
    private id: string
    private name: string
    private price: number

    constructor(id: string, name: string, price: number) {
        this.id, this.name = id, this.price = price
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getPrice(){
        return this.price
    }

    public setId(newId: string){
        return this.id = newId
    }

    public setName(newName: string){
        return this.name = newName
    }

    public setPrice(newPrice: number){
        return this.price = newPrice
    }
}