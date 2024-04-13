function isSameType(value1, value2) {
  if (isNan(value1) || isNan(value2)) {
    return isNan(value1) === isNan(value2);
  }
  return toString.call(value1) === toString.call(value2);
}
function isNan(val) {
  return val !== val;
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));