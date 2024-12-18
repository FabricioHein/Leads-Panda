import Api from '@/api/api';

class TaskService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/task';
        this.config = config || {};
        this.token = token;
    }
    async atualizarTask() {
        return await this.update();
    }
    async atualizarTaskSub() {
        this.url = '/api/task/atualizarTaskSub';

        return await this.update();
    }
    async deleteTask() {
        this.url = '/api/task/delete';

        return await this.post();
    }
    async deleteTaskAnexo() {
        this.url = '/api/task/delete/deleteTaskAnexos';
        return await this.post();
    }
    async criarTask() {
        const task = await this.post();
        return task.data;
    }
    async atualizaVendas() {
        this.url = '/api/task/atualizaVendas';

        return await this.post();
    }
    async criarTaskAnexos() {
        this.url = '/api/task/anexos';
        return await this.post();
    }
    async getVisaoGeralTaskSub() {

        const getVisaoGeralTask = await this.post();
        return getVisaoGeralTask.data;
    }
    async getAllTask() {
        const allUser = await this.get();
        return allUser.data || [];
    }
    async getByIdTask() {
        const getByIdTask = await this.get();
        if(getByIdTask.data) return getByIdTask.data;
        return [];
    }
    async getAllTaskSubs() {
        const allUser = await this.get();
        if(allUser.data) return allUser.data
        return [];
    }
    async criarTaskSub() {
        this.url = '/api/task/subtask';
        return await this.post();
    }
    async deleteTaskSub() {
        this.url = '/api/task/delete/deleteTaskSub';
        return await this.post();
    }
}

export default TaskService;
