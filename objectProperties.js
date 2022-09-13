function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

function countdown(num) {
  console.log(num);
  var nextNum = num - 1;
  if (nextNum > 0) {
    countdown(nextNum);
  }
}
countdown(5);