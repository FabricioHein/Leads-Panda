import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class PageLinkRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getPageLinkAll(empresa_configId: any): Promise<{
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }[]>;
    getNomeLInkExiste(nome_link: any): Promise<{
        links: {
            id: number;
            label: string;
            href: string;
            icon: string;
            page_linkId: string;
        }[];
    } & {
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
    getByIdPageNome(nome_link: any): Promise<{
        links: {
            id: number;
            label: string;
            href: string;
            icon: string;
            page_linkId: string;
        }[];
    } & {
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
    getByIdPageLink(id: any): Promise<{
        links: {
            id: number;
            label: string;
            href: string;
            icon: string;
            page_linkId: string;
        }[];
    } & {
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
    createPageLink(data: any): Promise<{
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
    updatePageLink(data: any): Promise<{
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
    deletePageLink(id: any): Promise<{
        id: string;
        profileText: string;
        nome_link: string;
        linkProfile: string;
        public: boolean;
        backgroundColor1: string;
        backgroundColor2: string;
        colorText1: string;
        colorText2: string;
        backgroundImage: string;
        buttonColor: string;
        showProfilePicture: boolean;
        showShareLink: boolean;
        clientId: number;
    }>;
}
