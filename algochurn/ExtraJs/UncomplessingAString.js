
/**
 * @param {string} str
 * @returns {string}
*/

function uncompress(str) {
    const stack = [];
    for (let c of str) {
        let subStr = "";
        if (c === ")") {
            while (stack[stack.length - 1] !== '(') {
                subStr = stack.pop() + subStr;
            }
            stack.pop();
            let digitChar = ''

            while (isDigit(stack[stack.length - 1])) {
                digitChar = stack.pop() + digitChar;
            }
            const digit = parseInt(digitChar);
            stack.push(subStr.repeat(digit));
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
}

function isDigit(s) {
    return s <= "9" && s >= "0";
}
