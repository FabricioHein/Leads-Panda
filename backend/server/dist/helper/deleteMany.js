"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMany = void 0;
function deleteMany(entityDTO, current, relation) {
    return current[relation]
        .filter((quality) => !entityDTO[relation].some((item) => quality.id === item.id))
        .map((quality) => ({ id: quality.id }));
}
exports.deleteMany = deleteMany;
//# sourceMappingURL=deleteMany.js.map