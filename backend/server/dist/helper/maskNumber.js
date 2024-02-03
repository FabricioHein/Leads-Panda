"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskNumber = void 0;
function maskNumber(number) {
    const numberStr = number.toString();
    if (numberStr.length >= 5) {
        return numberStr;
    }
    const leadingZeros = 5 - numberStr.length;
    return '#' + '0'.repeat(leadingZeros) + numberStr;
}
exports.maskNumber = maskNumber;
//# sourceMappingURL=maskNumber.js.map