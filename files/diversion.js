'use strict';

function diversion(binLength) {
    if (binLength === 0) return 0;
    if (binLength === 1) return 2;
    const numbersEndingWith0 = new Array(binLength);
    const numbersEndingWith1 = new Array(binLength);
    numbersEndingWith0[0] = 1;
    numbersEndingWith1[0] = 1;

    for (let i = 1; i<binLength; i++) {
        numbersEndingWith0[i] = numbersEndingWith0[i-1] + numbersEndingWith1[i-1];
        numbersEndingWith1[i] = numbersEndingWith0[i-1];
    }
    return numbersEndingWith0[binLength -1] + numbersEndingWith1[binLength - 1];
}

module.exports = diversion;
