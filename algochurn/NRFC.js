//Given a string of characters, return the index of the first non-repeating character.

const nonRepeatingFirstCharacter = (str) => {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
            return i;
        }
    }

    return null;
};

const str = "abcdcaf";
console.log(nonRepeatingFirstCharacter(str));