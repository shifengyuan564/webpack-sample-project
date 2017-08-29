export function arrowFunctions() {

    function withACallBack(options, callback) {
        callback(options);
    }

    withACallBack('so long', function (options) {
            return options;
        }
    );
    withACallBack('a little shorter', (options) => {
            return options;
        }
    );
    withACallBack('very short', options => options);


    /* ================================= 测试 ES2016的 this  (start)=================================*/
    const store = {
        address: '101 Main Street',
        what: function () {
            return this.address;    // traditional function : this指的是store变量
        },
        arrow: () => {
            return this.address;    // arrow function: this，指的是wrapping function (arrowFunctions)
        }
    };
    //console.log(store.arrow()) ;     // undefined
    console.log(store.what());       // '101 Main Street'


    function Welcome() {
        this.happy = 'yes';
        withACallBack('traditional function', function (option) {
            console.log(this);  // undefined
        });
        withACallBack('arrow', (option) => {
            console.log(this);  // Welcome {happy: "yes"}
        })
    }

    new Welcome();

    /* ================================= 测试 ES2016的 this  (end)=================================*/

}
