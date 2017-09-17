import { Ingredient } from './ingredient.model';

export class Donut {

    constructor(
        public flavor: string,
        public ingredients: Ingredient[],
        public instructions: string[],
        public type: string
    ) {}
}