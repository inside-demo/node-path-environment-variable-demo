var BigNumber = require('bignumber.js');

module.exports = function (a) {
    return new BigNumber(a).squareRoot().toNumber();
}