import { Ingredient } from './ingredient.model';


export class PrepItem {
    constructor(
        public ingredients: Ingredient[],
        public instructions: string[],
        public name: string
    ) {}
}