import { TaskService } from '../service/task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTask(): Promise<any>;
    getByIdTask(id: any, req: any): Promise<any>;
    atualizaVendas(req: any): Promise<any>;
    deleteTask(req: any): Promise<any>;
    createTask(req: any): Promise<any>;
    getAllTaskSubtask(id: any, req: any): Promise<any>;
    getTaskAnexos(req: any): Promise<any>;
    deleteTaskAnexos(req: any): Promise<any>;
    deleteTaskSub(req: any): Promise<any>;
    atualizarTask(req: any): Promise<any>;
    createTaskSub(req: any): Promise<any>;
    createAnotacao(req: any): Promise<any>;
    getVisaoGeralTaskSub(clientId: any, req: any): Promise<any>;
    getVisaoGeralTask(clientId: any, req: any): Promise<any>;
    atualizarAnotacao(req: any): Promise<any>;
    atualizarTaskSub(req: any): Promise<any>;
    deleteAnotacao(req: any): Promise<any>;
    getAllAnotacao(id: any, req: any): Promise<any>;
    getAllMotivos(clienteId: any, req: any): Promise<any>;
    getByIdMotivos(id: any, req: any): Promise<any>;
    atualizarMotivos(req: any): Promise<any>;
    createMotivos(req: any): Promise<any>;
    deleteMotivos(req: any): Promise<any>;
}
