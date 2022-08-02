import { BaseDatabase } from "./BaseDatabase";
import { Product } from "../models/Product";


export class ProductDatabase extends BaseDatabase { 
    public static TABLE_PRODUCTS = "Labe_Product";

    public async getAllProducts(){
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
    }

    public async createProduct(product: Product){
        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }
}

