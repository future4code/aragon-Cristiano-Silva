export interface IProductDB {
    id: string,
    name: string
}

export interface ITagDB {
    id: string,
    tag: string
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string[] = []
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }
}

export interface IGetProductsInputDTO{
    search: string
}

export interface IGetProductsOutputDTO{
    products: Product[]
}

export interface IPostProductInputDTO {
    token: string,
    name: string
}

export interface IPostProductOutputDTO{
    message: string
}

export interface IDeleteProductInputDTO{
    token: string
    productId: string
}

export interface IDeleteProductOutputDTO{
    message: string
}

export interface IRemoveTagsInputDTO{
    token: string
    productId: string
}

export interface IRemoveTagsOutputDTO{
    message: string
}

export interface IAddTagInputDTO {
    token: string,
    productId: string,
    tagName: string
}

export interface IAddTagOutputDTO {
    message: string,
}

export interface IGetProductsByTagOutputDTO{
    products: IProductDB[]
}

export interface IUpdateProductInputDTO{
    token: string,
    product_id: string,
    name: string
}

export interface IUpdateProductOutputDTO {
    message: string
}