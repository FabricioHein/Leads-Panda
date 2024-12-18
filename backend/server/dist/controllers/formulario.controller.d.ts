import { FormularioService } from '../service/formulario.service';
export declare class FormularioController {
    private readonly formularioService;
    constructor(formularioService: FormularioService);
    getAllFormularioDinamico(empresa_configId: any): Promise<any>;
    getByURLFormularioDinamico(url: any): Promise<any>;
    deleteFormularioDinamico(req: any): Promise<any>;
    createFormularioDinamico(req: any): Promise<any>;
    atualizarFormularioDinamico(req: any): Promise<any>;
}
