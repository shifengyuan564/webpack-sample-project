export function spreadOperator() {

    const sauces = ['bbq', 'buffaloe', 'honey mustard'];
    const dressings = ['ranch', 'balsamic', 'thousand island'];
    const superSecretSauce = [...sauces, ...dressings];

    console.log(superSecretSauce);    // (6) ["bbq", "buffaloe", "honey mustard", "ranch", "balsamic", "thousand island"]


    //technically this is not yet allowed for objects but you can do it in create react app
    const favoriteToppings = {    // the object we will spread, has two key-value pairs
        peanutButter: 'crunchy',
        jelly: 'strawberry'
    };

    const sandwich = {  // we are going to add the properties of condiments to this new object by using an ellipsis
        breadSlices: 2,
        ...favoriteToppings
    };

    console.log('sandwich = ', sandwich);   // sandwich = Object {breadSlices: 2, peanutButter: "crunchy", jelly: "strawberry"}


    //you can also do
    const sameSandwich = Object.assign({breadSlices: 2}, favoriteToppings);
    console.log('sameSandwich = ', sameSandwich);

}
