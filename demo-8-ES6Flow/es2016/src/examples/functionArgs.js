export function functionArgs() {

    // spread operator，...args是一个数组，表示所有传入的参数
    function getEmAll(...args) {
        console.log(args)
    }

    function setSomeDefaults(myString = "", aList = []) {
        console.log(myString, aList)
    }

    function configurationThing({monsterSize, boatCapacity}) {
        console.log(monsterSize, boatCapacity)
    }


    /* TEST */
    const array=[1,2,3];
    const kv = {"name":"tom","age":23};
    const sea = {"monsterSize": 88, "boatCapacity": 20, "windLevel":12};

    getEmAll(array,kv);
    setSomeDefaults("setSomeDefaults", array);
    configurationThing(sea);
}
