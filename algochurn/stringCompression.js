const runLengthEncoding = (str) => {
    let map = {};
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    }
    for (let key in map) {
        newStr += map[key] + key;
    }
    return newStr;
};

const str = "azvdaaarrtaaa";
console.log(runLengthEncoding(str));
