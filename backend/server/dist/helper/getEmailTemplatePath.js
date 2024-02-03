"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailTemplatePath = void 0;
const path_1 = require("path");
function getEmailTemplatePath(fileName) {
    return (0, path_1.resolve)(__dirname, '..', 'email', 'views', fileName);
}
exports.getEmailTemplatePath = getEmailTemplatePath;
//# sourceMappingURL=getEmailTemplatePath.js.map