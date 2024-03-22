// Implement the class **Validator**, for validating strings. This class has next methods:

// - method **isEmail** that gets string as parameter and validate is it correct email or not. If it's ok, return true, otherwise false
// - method **isDomain** for domain validating
// - method **isDate** for date validation
// - method **isPhone** for phone validation

// - use Regexp for simpler validation

// Example:

// ```javascript
// var validator = new Validator();

// console.log(validator.isEmail('jshtml@mail.ru'));
// console.log(validator.isDomain('jshtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country
// ```

class Validator {
  isEmail(string) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(string);
  }
  isDomain(string) {
    var pattern = /^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    return pattern.test(string);
  }
  isDate(number) {
    var pattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return pattern.test(number);
  }
  isPhone(number) {
    var pattern = /^(\(0\d{2}\)\s?|\d{3}-)\d{6}$/;
    return pattern.test(number);
  }
}
var validator = new Validator();

console.log(validator.isEmail("jshtml@mail.ru"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+375 (29) 817-68-92"));
