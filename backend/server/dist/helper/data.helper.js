'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const moment = require('moment');
require('moment/locale/pt-br');
moment.locale('pt-br');
class DateTime {
    static ToDateTime(val) {
        if (val.indexOf('/') > -1) {
            const data = val.split('/');
            return new Date(parseInt(data[2]), parseInt(data[1]) - 1, parseInt(data[0]));
        }
        else if (val.indexOf('-') > -1) {
            const data = val.split('-');
            return new Date(parseInt(data[0]), parseInt(data[1]) - 1, parseInt(data[2]));
        }
        throw new Error(`Data ${val} no formato inválido para conversão.`);
    }
    static formatToHoraMin(date) {
        let data = new Date(date);
        let dataHora = data.toISOString().split('T')[0];
        let horaMinuto = data.toTimeString().split(' ')[0];
        let horaMinutoSemSegundos = horaMinuto.split(':').slice(0, 2).join(':');
        return `${dataHora}T${horaMinutoSemSegundos}`;
    }
    static ToFormat(val, format) {
        return moment(val).utc().format(format);
    }
    static DateDiff(inicial, final) {
        return moment(final).diff(moment(inicial));
    }
    static DateNow() {
        return DateTime.ToDateTime(moment().utc().format('DD/MM/YYYY'));
    }
    static startOfDay() {
        return moment().utc().startOf('day');
    }
    static getDataBase(data) {
        let month = moment(data).month();
        let year = moment(data).year();
        return ('0' + (month + 1)).slice(-2) + '/' + year;
    }
    static subtractDays(date, day) {
        return moment(date).subtract('d', day).utc().toDate();
    }
    static subtractMonth(date, months) {
        return moment(date).subtract(months, 'M').utc().toDate();
    }
    static AddMonth(date, month) {
        return moment(date).add(month, 'month').utc().toDate();
    }
    static AddDay(date, day) {
        return moment(date).add(day, 'day').utc().toDate();
    }
    static EqualsDate(inicial, final) {
        return (moment(inicial).utc().format('DD/MM/YYYY') ===
            moment(final).utc().format('DD/MM/YYYY'));
    }
    static Now() {
        return moment().utc().toDate();
    }
    static isSameDay(date) {
        return moment(date).utc().isSame(new Date(), 'day');
    }
    static DateToString(date) {
        return moment(date).utc().format('DD/MM/YYYY');
    }
    static MonthYearToString(date) {
        return moment(date).utc().format('MM/YYYY');
    }
    static EndOfMonth(date) {
        let dateTime = this.ToDateTime(date);
        let formatDate = moment(dateTime);
        let fullYear = new Date(formatDate).getFullYear();
        let month = new Date(formatDate).getMonth();
        let lastDayDate = new Date(fullYear, month + 1, 0);
        return moment(lastDayDate).utc().format('YYYY-MM-DD');
    }
    static DataBaseToString(date) {
        let dateTime = this.ToDateTime(date);
        let formatDate = moment(dateTime);
        return moment(formatDate).utc().format('YYYY-MM-DD');
    }
    static dateTimeAsId() {
        const data = new Date(new Date().getTime());
        const year = data.getFullYear();
        const m = data.getMonth() < 12 ? data.getMonth() + 1 : 1;
        const month = ('0' + m).slice(-2);
        const d = data.getDate();
        const day = ('0' + d).slice(-2);
        const h = data.getHours();
        const hours = ('0' + h).slice(-2);
        const min = data.getMinutes();
        const minutes = ('0' + min).slice(-2);
        const sec = data.getSeconds();
        const seconds = ('0' + sec).slice(-2);
        const mili = data.getMilliseconds();
        const ms = ('0' + mili).slice(-2);
        return parseInt(`${year}${month}${day}${hours}${minutes}${seconds}${ms}`);
    }
    static comparaMaior(dataInicial, dataFinal) {
        let i = this.ToDateTime(dataInicial);
        let f = this.ToDateTime(dataFinal);
        let inicio = moment(i);
        let fim = moment(f);
        if (moment(inicio).isSameOrAfter(fim)) {
            return true;
        }
        return false;
    }
    static comparaMenor(dataInicial, dataFinal) {
        let i = this.ToDateTime(dataInicial);
        let f = this.ToDateTime(dataFinal);
        let inicio = moment(i);
        let fim = moment(f);
        if (moment(inicio).isSameOrBefore(fim)) {
            return true;
        }
        return false;
    }
    static DateDiffHoras(inicial, final) {
        const diff = Math.abs(final.getTime() - inicial.getTime());
        const horas = Math.trunc(diff / (1000 * 60 * 60));
        return horas;
    }
    static DateDiffDias(inicial, final) {
        const diff = Math.abs(final.getTime() - inicial.getTime());
        const days = Math.trunc(diff / (1000 * 60 * 60 * 24));
        return days;
    }
    static DateDiffMeses(inicial, final) {
        let diminuiMes = inicial.getDate() > final.getDate() ? 1 : 0;
        let months;
        months = (final.getFullYear() - inicial.getFullYear()) * 12;
        months -= inicial.getMonth();
        months -= diminuiMes;
        months += final.getMonth();
        return months <= 0 ? 0 : months;
    }
    static DateDiffAnos(inicial, final) {
        let anos = final.getFullYear() - inicial.getFullYear();
        if (final.getMonth() < inicial.getMonth()) {
            anos--;
        }
        return anos <= 0 ? 0 : anos;
    }
    static idade(dataNascimento, dataDoCalculo) {
        if (!dataDoCalculo) {
            dataDoCalculo = new Date();
        }
        let diferencaAnos = dataDoCalculo.getFullYear() - dataNascimento.getFullYear();
        if (new Date(dataDoCalculo.getFullYear(), dataDoCalculo.getMonth(), dataDoCalculo.getDate()) <
            new Date(dataDoCalculo.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate()))
            diferencaAnos--;
        return diferencaAnos;
    }
    static convertDateBankFormat(value) {
        const dia = value.substr(0, 2);
        const mes = value.substr(2, 2);
        let ano = value.substr(4, 4);
        ano = ano.length === 2 ? '20' + ano : ano;
        return this.ToDateTime(`${dia}/${mes}/${ano}`);
    }
    static convertInverseDateBankFormat(value) {
        let ano = value.substr(0, 4);
        const mes = value.substr(4, 2);
        const dia = value.substr(6, 2);
        ano = ano.length === 2 ? '20' + ano : ano;
        return this.ToDateTime(`${dia}/${mes}/${ano}`);
    }
    static primeiroDiaMes(dataBase) {
        if (!dataBase)
            return this.ToDateTime(moment().utc().startOf('M').format('DD/MM/YYYY'));
        return this.ToDateTime(moment(`${dataBase} 00:00`, 'DD/MM/YYYY h:m')
            .utc()
            .startOf('M')
            .format('DD/MM/YYYY'));
    }
    static ultimoDiaMes(dataBase) {
        if (!dataBase)
            return this.ToDateTime(moment().utc().endOf('M').format('DD/MM/YYYY'));
        return this.ToDateTime(moment(`${dataBase} 00:00`, 'DD/MM/YYYY h:m')
            .utc()
            .endOf('M')
            .format('DD/MM/YYYY'));
    }
    static extractDate(value) {
        value = (value || '').toString();
        if (value.indexOf('T') === -1) {
            return null;
        }
        const data = value.split('T')[0];
        const splited = data.split('-');
        return `${splited[2]}/${splited[1]}/${splited[0]}`;
    }
    static calcularVencimentoCobranca(regraCobranca) {
        let mes = new Date().getMonth() + 1;
        if (regraCobranca.dia_vencimento < new Date().getDate()) {
            mes = mes + 1;
        }
        return this.vencimentoCobranca(regraCobranca.dia_vencimento, mes);
    }
    static vencimentoCobranca(diaVencimento, mes) {
        return this.ToDateTime(`${diaVencimento.toString().padStart(2, '0')}/${mes
            .toString()
            .padStart(2, '0')}/${new Date().getFullYear()}`);
    }
    static AddHours(date, hours) {
        return moment(date).add(hours, 'hour').utc().toDate();
    }
    static getListadeData(dataInicial, dataFinal) {
        let dataList = [];
        let dataIgual = dataInicial === dataFinal ? true : false;
        let dataInicio = this.ToDateTime(dataInicial);
        let dataFim = this.ToDateTime(dataFinal);
        let diifData = this.DateDiffDias(dataInicio, dataFim);
        let dataAdd = dataInicial;
        if (!dataIgual) {
            for (let i = 0; i < diifData; i++) {
                let checkDataArr = !dataList.find((i) => i !== dataAdd);
                if (checkDataArr) {
                    dataList.push(dataAdd);
                }
                let dataFormtConvert = DateTime.ToDateTime(dataAdd);
                let dataAddDay = DateTime.AddDay(dataFormtConvert, 1);
                let newData = DateTime.DateToString(dataAddDay);
                dataList.push(newData);
                dataAdd = newData;
            }
        }
        else {
            dataList.push(new Date(dataAdd));
        }
        return dataList;
    }
    static createDate(dia, mes, ano) {
        let date = new Date(`${parseInt(ano)}-${parseInt(mes)}-${parseInt(dia)}`);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    static convertSecondsToDate(seconds) {
        let date = new Date();
        date.setTime(seconds * 1000);
        return date;
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=data.helper.js.map