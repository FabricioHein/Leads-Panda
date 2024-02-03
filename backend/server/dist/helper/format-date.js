"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate({ date, showHour = false }) {
    const options = showHour
        ? {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }
        : { timeZone: 'America/Sao_Paulo' };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}
exports.formatDate = formatDate;
//# sourceMappingURL=format-date.js.map