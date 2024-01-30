import { FormularioService } from '../service/formulario.service';
export declare class FormularioAskController {
    private readonly formularioAskService;
    constructor(formularioAskService: FormularioService);
    getByURLFormularioDinamicoOpen(url: any): Promise<any>;
    createFormularioAskDinamico(req: any): Promise<any>;
}
