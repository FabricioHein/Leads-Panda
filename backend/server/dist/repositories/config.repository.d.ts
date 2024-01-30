import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ConfigRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getByIdUserConfig(id: any): Promise<any>;
    getByIdUserEmpresa(id: any): Promise<any>;
    getPermissaoModulos(id: any): Promise<any>;
    getPermissaoSubModulos(id: any): Promise<any>;
    getModulosSistema(): Promise<({
        subModulo: {
            id: number;
            nome: string;
            url: string;
            ativo: boolean;
            icon: string;
            ordem: number;
            moduloId: number;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        nome: string;
        url: string;
        ativo: boolean;
        ordem: number;
        icon: string;
        created_at: Date;
        updated_at: Date;
    })[]>;
    getPermissaoDepartamento(): Promise<string>;
    getPermissaoSecretaria(): Promise<string>;
}
