/* 在一个文件或模块中，export、import可以有多个，export default仅有一个 */

// export default const mySetup = {      // DOESN'T WORK !
//   environment: 'tropical'
// }

const mySetup = {
    environment: 'tropical'
};
export default mySetup;                 // this works !


export const widget = {/* ... */};

export function birthdayReminder() {
    return 'Happy Birthday!'
}


let trees = [];

class ShinyButton {
    render() {
        return 0;
    }
}

export {trees, ShinyButton};
