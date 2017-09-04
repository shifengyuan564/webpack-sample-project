export function promises() {

    function waitUpToThreeSeconds(seconds) {
        return new Promise((resolve, reject) => {

            console.log(`I'll wait up to three seconds. You asked me to wait for ${seconds} seconds.`);

            setTimeout(() => {
                    reject('3 seconds are up! You asked me to wait too long!')
                },
                3000
            );

            setTimeout(() => {
                    resolve(`${seconds} seconds are finished! What a pleasure!`)
                },
                seconds * 1000
            );
        })
    }

    // waitUpToThreeSeconds(2).then(successMessage => {
    //     console.log(successMessage)
    // }).catch(errorMessage => {
    //     console.log(errorMessage)
    // });

    waitUpToThreeSeconds(4).then(successMessage => {
        console.log("resolve:" + successMessage)
    }).catch(errorMessage => {
        console.log("reject:" + errorMessage)
    });



    /* ================= Promise.all ========================*/
    /*Promise.all 可以接收一个元素为 Promise 对象的数组作为参数，
    当这个数组里面所有的 Promise 对象都变为 resolve 时，该方法才会返回。*/

    let p1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 3000);
    });

    let p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("World");
        }, 1000);
    });

    Promise.all([p1, p2]).then(function (result) {
        console.log(result); // ["Hello", "World"]
    });
}
