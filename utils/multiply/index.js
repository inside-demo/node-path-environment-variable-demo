var BigNumber = require('bignumber.js');

module.exports = function (a, b) {
    return new BigNumber(a).times(new BigNumber(b)).toNumber()
}
