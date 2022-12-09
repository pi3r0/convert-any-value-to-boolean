/**
 * Transform any value into a boolean
 * for number, only 0 is false other return true
 * @param {Any} value - value to cast
 * @return {Boolean} return the boolean equivalent
 */

module.exports = (value) => {
    if (isNaN(value)) {
        return value === 'true';
    }
    return !!+value;
};
