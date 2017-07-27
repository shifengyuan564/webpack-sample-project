// dynamic generate className
export function classify(key, value) {

    if (typeof(value) === "undefined") {
        return;
    }

    if (value[0] === "-") {
        value = key + value;
    }

    value = value.split(" -").join(` ${key}-`);
    return `${key} ${value}`;
}   //return key + " " +value.split(" -").join(" "+key+"-");
