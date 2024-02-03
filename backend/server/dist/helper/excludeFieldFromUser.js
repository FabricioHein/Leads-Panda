"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeFieldFromUser = void 0;
function excludeFieldFromUser(user, ...keys) {
    for (const key of keys) {
        delete user[key];
    }
    return user;
}
exports.excludeFieldFromUser = excludeFieldFromUser;
//# sourceMappingURL=excludeFieldFromUser.js.map