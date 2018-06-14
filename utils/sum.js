var BigNumber = require('bignumber.js');

module.exports = function (a, b) {
    return new BigNumber(a).plus(new BigNumber(b)).toNumber()
}