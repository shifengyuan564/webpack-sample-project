class Random {

    constructor(max = 1000, allowNegatives = true) {
        this.max = max;
        this.allowNegatives = allowNegatives;
    }

    randomInt(min, max) {
        if (max > this.max) {
            max = this.max;
        }
        if (min < 0 && !this.allowNegatives) {
            min = 0;
        }
        min = Math.ceil(min);
        max = Math.floor(max);
        return min + Math.floor(Math.random() * (max - min + 1));
    }
}

class ColorGenerator extends Random {

    typeList = ["hex", "rgb"];

    get types() {
        return this.typeList;
    }

    set types(types = ['hex', 'rgb']) {
        if (Array.isArray(types)) {
            this.typeList = types.map(type => type);
        }
    }

    constructor(max, allowNegatives, type = "rgb") {

        super(max, allowNegatives);

        if (this.typeList.includes(type)) {
            this.type = type;
        } else {
            this.type = "rgb";
        }
    }

    color() {
        let r = super.randomInt(0, 255);
        let g = super.randomInt(0, 255);
        let b = super.randomInt(0, 255);

        if (this.type === 'hex') {
            return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;      //转换成16进制
        } else {
            return `rgb(${r}, ${g}, ${b})`;
        }
    }
}

export const rando = new ColorGenerator();

const shakespeareApi = "https://api.graph.cool/simple/v1/shakespeare";

let options = () => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                allPoems(
                  first: 1
                  skip: ${rando.randomInt(0, 160)}
                ) {
                  title
                  author
                  lines
                  text
                }
              }`
        })
    }
};

/* ================  利用Fetch代替$.ajax ===========================*/
/* 1. 使用 Fetch
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    }).catch(function(e) {
        console.log("Oops, error");
    });
*/

/* 2. 使用 ES6 的 箭头函数 */
fetch(shakespeareApi, options())
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((e) => console.log("Oops, error",e));

/* 3. 使用 ES7 的async/await 来做优化 */
export async function getRandomPoem() {
    try {
        let result = await fetch(shakespeareApi, options());
        let response = await result.json(); // 这里可以不加await
        let poem = response.data.allPoems[0];
        return poem.text;
    } catch (error) {
        console.log("Error in getRandomPoem", error);
        throw error;
    }
}
