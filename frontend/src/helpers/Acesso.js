class Acesso {
    static getAcesso(modulo, url, permissao) {
        const acesso = {
            admin: false,
            ver: false,
            editar: false,
            deletar: false,
        };

        permissao.forEach((m) => {
            if (m.modulo == modulo) {
                console.log(m.modulo, modulo)

                m.submodulos.map((sub) => {
                    if (url == sub.url) {
                        acesso.deletar = sub.deletar;
                        acesso.editar = sub.editar;
                        acesso.ver = sub.ver;

                        if (sub.deletar && sub.editar && sub.ver) {
                            acesso.admin = true;
                        }
                    }
                });
            }
        });
        return acesso;
    }
}

export default Acesso;
