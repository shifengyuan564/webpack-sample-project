export function objAssemblyComputedProps() {

    // the object initializer shorthand allows us to more succinctly take a
    // variable and turn it into a key value pair
    let superPower = 'Laser eyes';
    let weaknesses = ['puppies'];

    // when I create a new object, I can pass in my own key-value pairs
    // or I can use this short hand to add variables I've already created
    const myHero = {
        isGood: true,
        superPower,
        weaknesses
    };

    console.log('myHero = ', myHero);
    // myHero =  Object {isGood: true, superPower: "Laser eyes", weaknesses: Array(1)}


    let creepyKeyName = 'skeletonKey';
    let rarity = 'very rare';

    const specialKeys = {
        [creepyKeyName]: rarity
    };

    console.log(specialKeys);   // {skeletonKey: 'very rare'}

    // handleInput = (e) => {
    //     let {value, name} = event.target;
    //     this.setState((prevState) => {
    //         return {
    //             [name]: value
    //         }
    //     })
    // }
}
