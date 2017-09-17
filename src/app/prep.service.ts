import { Subject } from 'rxjs/Subject';

import { PrepItem } from '../models/prepitem.model';
import { Ingredient } from '../models/ingredient.model';


export class PrepService {

    public prepListChanged = new Subject<PrepItem[]>();

    private prepList: PrepItem[] = [
        new PrepItem([
            new Ingredient(12, 'Apples (peeled + chopped)', 'dry', 'apples'),
            new Ingredient(300, 'Sugar', 'dry', 'grams'),
            new Ingredient(2, 'Lemon juice', 'wet', 'lemons')
        ], [
            '1. Heat in a frying pan over medium heat, stirring occasionally, until liquid is gone and apples are soft (10-15 mins)'
        ], 'Apple Fritter Filling'),

        new PrepItem([
            new Ingredient(15, 'Bacon', 'dry', 'strips')
        ], [
            '1. Line full sheet pan with parchment paper an put a perf tray on top',
            '2. Place bacon directly on perf tray so grease drips down to the full sheet tray',
            '3. Bake at 325 degrees for 13 minutes',
            '4. Take bacon out of the oven and chop, place back on tray',
            '5. Bake for another 3-5 minutes until bacon is golden to dark brown' 
        ], 'Bacon'),

        new PrepItem([
            new Ingredient(15, 'Bacon', 'dry', 'strips'),
            new Ingredient(100, 'Brown sugar', 'sugar', 'grams')
        ], [
            '1. Line full sheet pan with parchment paper, place bacon on top',
            '2. Sprinkle brown sugar on top of bacon, flip, and sprinkle sugar on the other side',
            '3. Bake at 325 degrees for 13 minutes',
            '4. Continue baking 2 mins until bacon is dark brown',
            '5. Remove bacon from the oven. Set on paper towels and blot to absorb grease once bacon is cool'
        ], 'Candied Bacon'),

        new PrepItem([
            new Ingredient(755, 'Blueberries, thawed', 'dry', 'grams'),
            new Ingredient(3566, 'Powdered sugar, sifted', 'dry', 'grams'),
            new Ingredient(15, 'Vanilla', 'wet', 'grams'),
            new Ingredient(3, 'Lemon juice', 'wet', 'lemons'),
        ], [
            '1. Puree blueberries. Pour powdered sugar in mixing bowl',
            '2. Add wet ingredients and blueberries to sugar and mix on 1st speed until incorporated',
            '3. Mix on 3rd speed until smooth'
        ], 'Blueberry Glaze (V)'),
    
        new PrepItem([

        ], [

        ], 'Blueberry Filling'),

        new PrepItem([

        ], [

        ], 'Blueberry Icing'),

        new PrepItem([

        ], [

        ], 'Caramel'),

        new PrepItem([

        ], [

        ], 'VEGAN Caramel'),

        new PrepItem([

        ], [

        ], 'Chai Glaze'),

        new PrepItem([

        ], [

        ], 'Cheesecake Topping'),

        new PrepItem([

        ], [

        ], 'Cherry Glaze (V)'),

        new PrepItem([

        ], [

        ], 'Chocolate Glaze'),

        new PrepItem([

        ], [

        ], 'VEGAN Chocolate Glaze'),

        new PrepItem([

        ], [

        ], 'Coconut Glaze (V)'),

        new PrepItem([

        ], [

        ], 'Cream Cheese Icing'),

        new PrepItem([

        ], [

        ], 'Eggless Chocolate Chip Cookie Dough'),

        new PrepItem([

        ], [

        ], 'Eggnog Glaze'),

        new PrepItem([

        ], [

        ], 'Gingerbread Glaze'),

        new PrepItem([

        ], [

        ], 'Grasshopper Glaze (V)'),

        new PrepItem([

        ], [

        ], 'Mango Glaze'),

        new PrepItem([

        ], [

        ], 'Marshmallow Fluff (V)'),

        new PrepItem([

        ], [

        ], 'Old Fashioned Dough'),

        new PrepItem([

        ], [

        ], 'Pumpkin Glaze'),

        new PrepItem([

        ], [

        ], 'Pastry Cream'),

        new PrepItem([

        ], [

        ], 'Peanut Butter Filling'),

        new PrepItem([

        ], [

        ], 'Peanut Butter Icing (V)'),

        new PrepItem([

        ], [

        ], 'Peppermint Glaze (V)'),

        new PrepItem([

        ], [

        ], 'Pumpkin Cream Cheese Icing'),

        new PrepItem([

        ], [

        ], 'GF Pumpkin Drizzle'),

        new PrepItem([

        ], [

        ], 'Pumpkin Glaze (V)'),

        new PrepItem([

        ], [

        ], 'GF Pumpkin Streusel'),

        new PrepItem([

        ], [

        ], 'Raspberry Glaze (V)'),

       new PrepItem([

        ], [

        ], 'Raspberry/Strawberry Filling (V)'),

        new PrepItem([

        ], [

        ], 'Roasted Pepitas'),

        new PrepItem([

        ], [

        ], 'Royal Icing'),

        new PrepItem([

        ], [

        ], 'Streusel'),

        new PrepItem([

        ], [

        ], 'Vanilla Cream'),

        new PrepItem([

        ], [

        ], 'Vanilla Glaze'),

        new PrepItem([

        ], [

        ], 'Whiskey Glaze'),

        new PrepItem([

        ], [

        ], 'Maple Icing (V)'),

        new PrepItem([

        ], [

        ], 'Chocolate Syrup '),

        new PrepItem([

        ], [

        ], 'Cocoa Mix'),

        new PrepItem([

        ], [

        ], 'Hazelnut Syrup'),

        new PrepItem([

        ], [

        ], 'Peanut Butter Sauce'),

        new PrepItem([

        ], [

        ], 'Peppermint Syrup'),

        new PrepItem([

        ], [

        ], 'Vanilla Syrup')
    ];






    setPrepList(prep: PrepItem[]) {
        this.prepList = prep;
        this.prepListChanged.next(this.prepList.slice());
    }

    getPrepList(): PrepItem[] {
        return this.prepList.slice();
    }

    getPrepItem(index: number): PrepItem {
        return this.prepList[index];
    }

    addPrepItem(prep: PrepItem) {
        this.prepList.push(prep);

        this.setPrepList(this.prepList);
    }

    removePrepItem(index: number) {
        if (this.prepList.length > -1) {
            this.prepList.splice(index, 1);
        }

        this.setPrepList(this.prepList);
    }





    setPrepIngredient(index: number, ingredients: Ingredient[]) {
        this.prepList[index].ingredients = ingredients;

        this.setPrepList(this.prepList);
    }

    addPrepIngredient(index: number, ingredient: Ingredient) {
        let newList: Ingredient[] = this.prepList[index].ingredients.slice();
        newList.push(ingredient);

        this.setPrepIngredient(index, newList);
    }

    removePrepIngredient(index: number, index2: number) {
        let newList: Ingredient[] = this.prepList[index].ingredients;
        if (newList.length > -1) {
            newList.splice(index2, 1);
        }

        this.setPrepIngredient(index, newList);
    }
}