import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';


export const decoratedFlavorList: string[] = [
    'Apple Fritter',
    'Apple Fritter (V)',
    'Apple Cranberry Fritter*',
    'Apple Cranberry Fritter (V)*',
    'Baby Spice (GF)(V)',
    'Banana Bread (V)',
    'Blood Orange Glazed Cake',
    'Blood Orange Glazed (GF)',
    'Blood Orange Glazed (OF)',
    'Blood Orange Glazed (V)',
    'Blood Orange Glazed Holes',
    'Blood Orange Glazed Holes (GF)',
    'Blood Orange Glazed (OF)',
    'Blood Orange Glazed Holes (V)',
    'Blueberry Glazed',
    'Blueberry Glazed (GF)',
    'Blueberry Glazed (OF)',
    'Blueberry Glazed (V)',
    'Bluberry Glazed Holes',
    'Blueberry Glazed Holes (GF)',
    'Blueberry Glazed Holes (OF)',
    'Blueberry Glazed Holes (V)',
    'Blueberry Fritter*',
    'Blueberry Fritter (V)*',
    'Brandied Eggnog*',
    'Boston Cream',
    'Cheesecake - Blueberry',
    'Cheesecake - Raspberry',
    'Cheesecake - Strawberry',
    'Chocolate Cake (GF)',
    'Chocolate Cake (V)',
    'Chocolate Cake Holes (GF)',
    'Chocolate Cake Holes (V)',
    'Chocolate Cherry (GF)',
    'Chocolate Cherry (V)',
    'Chocolate Glazed',
    'Chocolate Glazed (GF)',
    'Chocolate Glazed (V)',
    'Chocolate Glazed Chocolate Cake (V)',
    'Chocolate Glazed + Sprinkles',
    'Chocolate Glazed + Sprinkles (GF)',
    'Chocolate Glazed + Sprinkles (V)',
    'Chocolate Glazed Vanilla Filled',
    'Chocolate Glazed Vanilla Filled (V)',
    'Chocolate Grasshopper (V)*',
    'Chocolate Peppermint (V)',
    'Coconut (GF)',
    'Coconut (V)',
    'Coffee Cake (OF)',
    'Coffee Cake Holes (OF)',
    'Chai Glazed',
    'Chai Glazed (GF)',
    'Chai Glazed (V)',
    'Creme Brule',
    'Cinnamon Sugar',
    'Cinnamon Sugar (GF)',
    'Cinnamon Sugar (V)',
    'Cinnamon Sugar Holes',
    'Cinnamon Sugar Holes (GF)',
    'Cinnamon Sugar Holes (V)',
    'Cookie Dough',
    'Diablo Rojo',
    'Fat Elvis',
    'Lemon Glazed (OF)',
    'Lemon Glazed Blueberry Drizzled (OF)',
    'Lemon Glazed Holes (OF)',
    'Lemon Glazed Raspberry Drizzled (OF)',
    'Mango Glazed (OF)',
    'Mango Glazed Holes (OF)',
    'Maple Bacon',
    'Maple Pecan',
    'Maple Pecan (V)',
    'Nutella',
    'Pistachio',
    'Pistachio (GF)',
    'Pistachio (V)',
    'Paczki - Blueberry*',
    'Paczki - Blueberry (V)*',
    'Paczki - Raspberry*',
    'Paczki - Raspberry (V)*',
    'Paczki - Strawberry*',
    'Paczki - Strawberry (V)*',
    'Passionfruit Coconut',
    'Passionfruit Coconut (GF)',
    'Passionfruit Coconut (V)',
    'Pumpkin Glazed (GF)',
    'Pumpkin + Pepitas',
    'Peanut Butter Chocolate',
    'Peanut Butter Chocolate Bacon',
    'Peanut Butter + Jelly - Blueberry',
    'Peanut Butter + Jelly - Blueberry (V)',
    'Peanut Butter + Jelly - Raspberry',
    'Peanut Butter + Jelly - Raspberry (V)',
    'Peanut Butter + Jelly - Strawberry',
    'Peanut Butter + Jelly - Strawberry (V)',
    'Pear Cranberry Fritter*',
    'Pear Cranberry Fritter (V)*',
    'Pear Fritter*',
    'Pear Fritter (V)*',
    'Raspberry Glazed',
    'Raspberry Glazed (GF)',
    'Raspberry Glazed (OF)',
    'Raspberry Glazed (V)',
    'Raspberry Glazed Holes',
    'Raspberry Glazed Holes (GF)',
    'Raspberry Glazed Holes (OF)',
    'Raspberry Glazed Holes (V)',
    'Red Velvet',
    'Samoa',
    'Samoa (GF)',
    'Samoa (V)',
    'Smores',
    'Smores (GF)',
    'Smores (V)',
    'Squares',
    'Turtle',
    'Turtle (V)',
    'Twists',
    'Vanilla Glazed',
    'Vanilla Glazed (GF)',
    'Vanilla Glazed (V)',
    'Vanilla Glazed Holes',
    'Vanilla Glazed Holes (GF)',
    'Vanilla Glazed Holes (V)',
    'Violet*',
    'Whiskey Glazed',
    'Whiskey Glazed (GF)',
    'Letters (OF)',
    'Circles/Sandwiches',
    'Kids Decorated Yeast',
    'Birthday Yeast'
];


export class DonutFlavorService {

    public donutFlavorListChanged = new Subject<String[]>();

    public donutFlavors: string[] = [];

    setDonutFlavors(list: string[]) {
        this.donutFlavors = list;
        this.donutFlavorListChanged.next(this.donutFlavors.slice());
    }

    getDonutFlavors() {
        return this.donutFlavors.slice();
    }
}