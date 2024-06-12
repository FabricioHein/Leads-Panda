declare class AgendaRetornoModel {
    id: number | string;
    title: string;
    description: string;
    className: string;
    start: string;
    end: string;
    status: string;
    userIds: any[];
    constructor(data: {
        id: any;
        title: any;
        description: any;
        className: any;
        date_start: any;
        date_end: any;
        status: string;
        userIds: any[];
    });
    private formatDate;
}
export default AgendaRetornoModel;
