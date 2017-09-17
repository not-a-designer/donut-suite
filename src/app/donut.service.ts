import { Injectable } from '@angular/core'; 

import { Subject } from 'rxjs/Subject';
import { Donut } from '../models/donut.model';
import { Ingredient } from '../models/ingredient.model';


const CAKE_STEPS: string[] = [
    '1. Beat dry and fat on speed 1 until there are no clumps (10 mins)',
    '2. Add wet and milk and mix on speed 1 just until incorporated',
    '3. Scrape dry clumps from the bottom of the bowl. Mix on speed 3 for 10-20 secs'
];

export const YEAST_STEPS: string[] = [
    '1. Combine yeast, small sugar and first milk in a small bowl, whisk together',
    '2. Add small flour on top (no whisk) and place in warm area (near stove, etc)',
    '3. In meduim mixer, combine eggs/replacer and large sugar. whisk on speed 3',
    '4. Add oil mixer while still beating on speed 3',
    '5. When yeast mixture has grown, add to mixer, incorporate at speed 1, add milk, and incorporate',
    '6. Swap whisk attachment for dough hook, add dry ingredients in thirds, mixing on speed 1',
    '7. Set timer for 12 minutes to mix'
];

export const BABY_SPICE_STEPS: string[] = [
    '1. Melt shorting until clear. Combine with sugar and beat on speed 1 until incorporated',
    '2. Scrape unmixed sugar from the bottom of the bowl. Add applesauce and combine on speed 1',
    '3. Scrap unmixed sugar from the bottom of the bowl. Add milk mixture and combine on speed 1',
    '4. Add dry in thirds and mix until incorporated',
    '5. Scrape dry clumps from the bottom of the bowl. beat on speed 3 for 10-20 secs'
];

export const FULL_CAKE_YIELD: number = 10;
export const FULL_YEAST_YIELD: number = 8;

export const DONUT_TYPES: string[] = ['Gluten-friendly', 'Gluten-friendly Vegan', 'Raised', 'Regular', 'Vegan'];
export const DONUT_FLAVORS: string[] = ['Cake', 'Chocolate', 'Pumpkin', 'Baby Spice', 'Yeast', 'Vegan Yeast', 'Gingerbread', 'Red Velvet', 'Banana'];
export const INGREDIENT_TYPES: string[] = ['Dry', 'Fat', 'Wet', 'Milk', 'Yeast', 'Sugar', '\"Eggs\"'];

export const BATCH_PARTIAL_SIZE: string[] = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
export const BATCH_FULL_SIZE: number[] = [0, 1, 2];

@Injectable()
export class DonutService {

    public donutListChanged = new Subject<Donut[]>();

    private donutList: Donut[] = []; /*[
        new Donut('Cake', [
            new Ingredient(2880, 'Gluten-friendly flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(16, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(16, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Butter', 'fat', 'grams'),
            new Ingredient(16, 'Eggs', 'wet', 'eggs'),
            new Ingredient(392, 'Sour cream', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1840, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Gluten-friendly'),

        new Donut('Chocolate', [
            new Ingredient(2960, 'Gluten-friendly flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(324, 'Cocoa powder', 'dry', 'grams'),
            new Ingredient(1440, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Butter', 'fat', 'grams'),
            new Ingredient(16, 'Eggs', 'wet', 'eggs'),
            new Ingredient(440, 'Sour cream', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(2400, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS,
             'Gluten-friendly'),

        new Donut('Pumpkin', [
            new Ingredient(2880, 'Gluten-friendly flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(48, 'Pumpkin spice', 'dry', 'grams'),
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Butter', 'fat', 'grams'),
            new Ingredient(16, 'Eggs', 'wet', 'eggs'),
            new Ingredient(1216, 'Pumpkin puree', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1640, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Gluten-friendly'),

        new Donut('Baby Spice', [
            new Ingredient(2488, 'Gluten-friendly flour', 'dry', 'grams'),
            new Ingredient(24, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(6, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(4, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(1260, 'Sugar', 'sugar', 'grams'),
            new Ingredient(336, 'Shortening (melted)', 'fat', 'grams'),
            new Ingredient(768, 'Applesauce', 'wet', 'grams'),
            new Ingredient(48, 'Vinegar', 'milk', 'grams'),
            new Ingredient(24, 'Vanilla', 'milk', 'grams'),
            new Ingredient(1760, 'Milk', 'milk', 'grams')
            ], BABY_SPICE_STEPS,
            'Gluten-friendly/Vegan'),

        new Donut('Cake', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(14, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(8, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Butter', 'fat', 'grams'),
            new Ingredient(12, 'Eggs', 'wet', 'eggs'),
            new Ingredient(392, 'Sour cream', 'wet', 'grams'),
            new Ingredient(52, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1600, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS, 
            'Regular'),
        new Donut('Red Velvet', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(324, 'Cocoa powder', 'dry', 'grams'),
            new Ingredient(1600, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Butter', 'fat', 'grams'),
            new Ingredient(12, 'Eggs', 'wet', 'eggs'),
            new Ingredient(392, 'Sour cream', 'wet', 'grams'),
            new Ingredient(56, 'Vanilla', 'wet', 'grams'),
            new Ingredient(136, 'Vinegar', 'wet', 'grams'),
            new Ingredient(160, 'Red food coloring', 'wet', 'grams'),
            new Ingredient(1600, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Regular'),

        new Donut('Gingerbread', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(12, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(8, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(32, 'Ginger', 'dry', 'grams'),
            new Ingredient(8, 'Allspice', 'dry', 'grams'),
            new Ingredient(900, 'Brown sugar', 'dry', 'grams'),
            new Ingredient(2880, 'Butter', 'fat', 'grams'),
            new Ingredient(12, 'Eggs', 'wet', 'eggs'),
            new Ingredient(392, 'Sour cream', 'wet', 'grams'),
            new Ingredient(1280, 'Molasses', 'wet', 'grams'),
            new Ingredient(280, 'Vegetable oil', 'wet', 'grams'),
            new Ingredient(1480, 'Milk', 'milk', 'grams')
            ], CAKE_STEPS, 
            'Regular'),

        new Donut('Cake', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(8, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(4, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Shortening', 'fat', 'grams'),
            new Ingredient(480, 'Hot water', 'wet', 'grams'),            
            new Ingredient(56, 'Egg replacer', 'wet', 'grams'),
            new Ingredient(392, 'Coconut milk', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1564, 'Soy milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Vegan'),

        new Donut('Chocolate', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(240, 'Baking powder', 'dry', 'grams'),
            new Ingredient(384, 'Cocoa powder', 'dry', 'grams'),
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Shortening', 'fat', 'grams'),
            new Ingredient(480, 'Hot water', 'wet', 'grams'),
            new Ingredient(56, 'Egg replacer', 'wet', 'grams'),
            new Ingredient(392, 'Coconut milk', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1564, 'Soy milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Vegan'),

        new Donut('Banana Bread', [
            new Ingredient(2880, 'AP flour', 'dry', 'grams'),
            new Ingredient(40, 'Salt', 'dry', 'grams'),
            new Ingredient(120, 'Baking powder', 'dry', 'grams'),
            new Ingredient(8, 'Cinnamon', 'dry', 'grams'),
            new Ingredient(8, 'Fresh nutmeg', 'dry', 'grams'),
            new Ingredient(8, 'Ginger', 'dry', 'grams'),
            new Ingredient(8, 'Cloves', 'dry', 'grams'),            
            new Ingredient(900, 'Sugar', 'dry', 'grams'),
            new Ingredient(336, 'Shortening', 'fat', 'grams'),
            new Ingredient(8, 'Bananas', 'wet', 'bananas'),
            new Ingredient(392, 'Coconut milk', 'wet', 'grams'),
            new Ingredient(80, 'Vanilla', 'wet', 'grams'),
            new Ingredient(1000, 'Soy milk', 'milk', 'grams')
            ], CAKE_STEPS,
            'Vegan'),

        new Donut('Yeast', [
            new Ingredient(5000, 'AP flour', 'dry', 'grams'),
            new Ingredient(68, 'Salt', 'dry', 'grams'),
            new Ingredient(276, 'Large sugar (eggs)', 'sugar', 'grams'),
            new Ingredient(36, 'Egg yolks', 'eggs', 'yolks'),
            new Ingredient(214, 'Yeast', 'yeast', 'grams'),
            new Ingredient(26, 'Small sugar (yeast)', 'dry', 'grams'),
            new Ingredient(40, 'AP flour (yeast)', 'yeast', 'grams'),
            new Ingredient(1200, 'Milk (yeast)', 'yeast', 'grams'),
            new Ingredient(1200, 'Milk', 'milk', 'grams'),
            new Ingredient(420, 'Vegetable oil', 'wet', 'grams'),
            new Ingredient(38, 'Vanilla', 'wet', 'grams'),
            new Ingredient(3, 'Lemons', 'wet', 'lemons')            
            ], YEAST_STEPS,
            'Regular'),

        new Donut('Yeast', [
            new Ingredient(5000, 'AP flour', 'dry', 'grams'),
            new Ingredient(68, 'Salt', 'dry', 'grams'),
            new Ingredient(276, 'Large sugar (eggs)', 'sugar', 'grams'),
            new Ingredient(470, 'Hot water', 'eggs', 'grams'),
            new Ingredient(170, 'Egg replacer', 'eggs', 'grams'),
            new Ingredient(214, 'Yeast', 'yeast', 'grams'),
            new Ingredient(26, 'Small sugar (yeast)', 'dry', 'grams'),
            new Ingredient(40, 'AP flour (yeast)', 'yeast', 'grams'),
            new Ingredient(1200, 'Soy milk (yeast)', 'yeast', 'grams'),
            new Ingredient(1200, 'Soy milk', 'milk', 'grams'),
            new Ingredient(420, 'Vegetable oil', 'wet', 'grams'),
            new Ingredient(38, 'Vanilla', 'wet', 'grams'),
            new Ingredient(3, 'Lemons', 'wet', 'lemons') 
            ], YEAST_STEPS,
            'Vegan')
    ];*/

    constructor() {

    }

    setDonuts(donuts: Donut[]) {
        this.donutList = donuts;
        this.donutListChanged.next(this.donutList.slice());        
    }

    getDonuts(): Donut[] {
        return this.donutList.slice();
    }

    getDonut(index: number): Donut {
        return this.donutList[index];
    }

    addDonut(donut: Donut) {
        this.donutList.push(donut);
        this.donutListChanged.next(this.donutList.slice())
    }




    
    getIngredients(donut: Donut): Ingredient[] {
        return donut.ingredients.slice();
    }
    
    setIngredients(index: number, ingredients: Ingredient[]) {
        this.donutList[index].ingredients = ingredients;

        this.setDonuts(this.donutList);
    }

    addIngredient(index: number, newIng: Ingredient) {
        let newList: Ingredient[] = this.donutList[index].ingredients.slice();
        newList.push(newIng);

        this.setIngredients(index, newList);
    }

    removeIngredient(index1: number, index2: number) {
        let newList: Ingredient[] = this.donutList[index1].ingredients.slice();
        if (newList.length > -1) {
            newList.splice(index2, 1);
        }

        this.setIngredients(index1, newList);
    }
}