class AgendaRetornoModel {
    id: number | string;
    title: string;
    description: string;
    className: string;
    start: string;
    end: string;
    status: string;
    userIds: any[]

    constructor(data: { id: any; title: any; description: any; className: any; date_start: any; date_end: any;  status: string;userIds: any[] }) {
        this.id = data.id ? Number(data.id) : '';
        this.title = data.title ? String(data.title) : '';
        this.description = data.description ? String(data.description) : '';
        this.className = data.className ? String(data.className) : '';
        this.status = data.status ? String(data.status) : '';
        this.start = data.date_start ? this.formatDate(data.date_start) : '';
        this.end = data.date_end ? this.formatDate(data.date_end) : '';
         this.userIds = data.userIds ? data.userIds.map(id => Number(id)) : [];
    }

    private formatDate(date: Date | string): string {
        date = new Date(date);
        if (isNaN(date.getTime())) return '';  // Verifica se a data é inválida

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
}

export default AgendaRetornoModel;
