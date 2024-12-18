import { FileHelper } from 'src/helper/file.helper';
import { PageLinkRepository } from 'src/repositories/pageLink.repository';
export declare class PageLinkService {
    private pageLinkRepository;
    private fileHelper;
    constructor(pageLinkRepository: PageLinkRepository, fileHelper: FileHelper);
    imagePageLink(data: any): Promise<string>;
    atualizarPageLink(data: any): Promise<{
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
    getNomeLInkExiste(nome_link: any): Promise<{
        msg: string;
        error: boolean;
    }>;
    getPageLinkByNome_link(nome_link: any): Promise<{
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
    getPageLinkById(id: any): Promise<{
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
    getAllPageLink(empresa_configId: any): Promise<{
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
    createPageLink(data: any): Promise<{
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
    deletePageLink(data: any): Promise<{
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
