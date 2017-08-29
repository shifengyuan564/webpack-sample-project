export function destructuring() {

    const feast = {    //the object we will destructure
        appetizer: 'Spring Rolls',
        entree: 'Enchiladas',
        dessert: 'Apple Pie',
        beverages: {
            wine: 'Merlot',
            water: 'Sparkling',
        }
    };

    // To destructure an object we declare a new variable and then choose any number
    // of keys to create into stand alone variables,  we also specify the object we're destructuring
    let {appetizer, dessert} = feast;
    console.log('appetizer = ', appetizer);     //appetizer = 'Spring Rolls'
    console.log('dessert = ', dessert);         //dessert = 'Apple Pie'

    let {entree, beverages: {wine}} = feast;
    let {water} = feast.beverages;
    let {dessert: favorite} = feast;

    console.log(entree);    //"Enchiladas"
    console.log(wine);      //"Merlot"
    console.log(water);     //"Sparkling"
    console.log(favorite);  //"Apple Pie"

    const horsdoeuvre = ['crab cakes', 'spring rolls', 'fried pickles', 'caviar'];

    let [crabCake, , , grossFishEggs] = horsdoeuvre;
    console.log(crabCake);         //"crab cakes"  -----> horsdoeuvre[0]
    console.log(grossFishEggs);    //"caviar"

}
