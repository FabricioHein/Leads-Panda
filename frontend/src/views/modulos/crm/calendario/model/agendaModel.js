class AgendaModel {
    constructor(data) {
        this.id = data.id ? Number(data.id) : undefined;
        this.title = data.title ? String(data.title) : undefined;
        this.description = data.description ? String(data.description) : undefined;
        this.className = data.className ? String(data.className) : undefined;
        this.status = data.status ? String(data.status) : undefined;
        this.date_start = data.start ? this.parseDate(data.start) : undefined;
        this.date_end = data.end ? this.parseDate(data.end) : undefined;
        this.userIds = data.userIds ? data.userIds.map(id => Number(id)) : [];
    }

    parseDate(dateString) {
        const [day, month, year, hours, minutes] = dateString.match(/\d+/g).map(Number);
        return new Date(year, month - 1, day, hours, minutes);
    }
}

export default AgendaModel;
