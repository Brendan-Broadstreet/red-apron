export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description ='', price = 0, imageUrl = 'https://cdn4.iconfinder.com/data/icons/service/500/tableware_plate_knife_fork_heart_cook_cooking_eat_eating_food-512.png'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
