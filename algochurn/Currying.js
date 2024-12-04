//The basic implementation of currying is:

let sum = function (a) {
    return function (b) {
      if (b) {
        return sum(a + b);
      }
      return a;
    };
  };

//alt

  let sum2 = (a) => {
    return (b) => {
      return b ? sumES6(a + b) : a;
    };
  };

//alt2

let sum3 = (a) => (b) => b ? sumGod(a + b) : a;

console.log(sum(1)(2)(5)());
console.log(sum2(1)(2)(5)());
console.log(sum3(1)(2)(5)());