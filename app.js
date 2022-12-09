const anyValueToBoolean = require('./src/any-value-to-boolean');

console.log('should be true');
console.log(anyValueToBoolean(1));
console.log(anyValueToBoolean(2));
console.log(anyValueToBoolean(true));
console.log(anyValueToBoolean('true'));

console.log('should be false');
console.log(anyValueToBoolean(0));
console.log(anyValueToBoolean(false));
console.log(anyValueToBoolean('false'));
console.log(anyValueToBoolean('undefined'));
console.log(anyValueToBoolean(undefined));
