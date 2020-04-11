export class Product {
    id: number;
    name: string;
    instructions: string;
    servings: number;
    price: number;
    img: string;
    category: string;
    preptime: number;
    cooktime: number;

    constructor(id, name, description = '', price = 99.99, img = 'https://cdn4.iconfinder.com/data/icons/service/500/tableware_plate_knife_fork_heart_cook_cooking_eat_eating_food-512.png', servings, instructions, category, preptime = 99, cooktime = 99) {
        this.id = id;
        this.name = name;
        // this.description = description
        this.price = price;
        this.img = img;
        this.servings = servings;
        this.instructions = instructions;
        this.category = category;
        this.cooktime = cooktime;
    }
}
