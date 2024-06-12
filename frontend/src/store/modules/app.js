import i18n from '../../i18n';
import router from '@/router';

export default {
    state: {
        isLoggin: false,
        usuario: localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {},
        layout: 'auth',
        is_show_sidebar: true,
        is_show_search: false,
        is_dark_mode: false,
        dark_mode: 'light',
        locale: null,
        menu_style: 'vertical',
        layout_style: 'full',
        countryList: [
            { code: 'brl', name: 'Português Brasil' },
            { code: 'pt', name: 'Português' },
            { code: 'en', name: 'English' },
            { code: 'es', name: 'Spanish' },
        ],
    },
    mutations: {
        setLayout(state, payload) {
            state.layout = payload;
        },
        toggleSideBar(state, value) {
            state.is_show_sidebar = value;
        },
        toggleSearch(state, value) {
            state.is_show_search = value;
        },
        toggleLocale(state, value) {
            value = value || 'brl';
            i18n.global.locale = value;
            localStorage.setItem('i18n_locale', value);
            state.locale = value;
        },
        toggleDarkMode(state, value) {
            //light|dark|system
            value = value || 'light';
            localStorage.setItem('dark_mode', value);
            state.dark_mode = value;
            if (value == 'light') {
                state.is_dark_mode = false;
            } else if (value == 'dark') {
                state.is_dark_mode = true;
            } else if (value == 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    state.is_dark_mode = true;
                } else {
                    state.is_dark_mode = false;
                }
            }

            if (state.is_dark_mode) {
                document.querySelector('body').classList.add('dark');
            } else {
                document.querySelector('body').classList.remove('dark');
            }
        },

        toggleMenuStyle(state, value) {
            //horizontal|vertical|collapsible-vertical
            value = value || '';
            localStorage.setItem('menu_style', value);
            state.menu_style = value;
            if (!value || value === 'vertical') {
                state.is_show_sidebar = true;
            } else if (value === 'collapsible-vertical') {
                state.is_show_sidebar = false;
            }
        },

        toggleLayoutStyle(state, value) {
            //boxed-layout|large-boxed-layout|full
            value = value || '';
            localStorage.setItem('layout_style', 'full');
        },
        setLogin: () => {
            router.push('/');
            setTimeout(() => {
                window.location.reload(true);
            }, '1000');
        },
        setUpdate: () => {
            setTimeout(() => {
                window.location.reload(true);
            }, '1000');
        },
    },
    getters: {
        layout(state) {
            return state.layout;
        },
        usuario: (state) => {
            return state.usuario.usuario || {};
        },
        token: (state) => {
            return state.usuario.token || '';
        },
        cliente: (state) => {
            return state.usuario.cliente || {};
        },
        permissao: (state) => {
            return state.usuario?.sistema?.permissao || [];
        },
        modulos: (state) => {
            return state.usuario?.sistema?.modulos || [];
        },
        sistema: (state) => {
            return state.usuario?.sistema || [];
        },
},
    actions: {
        setLogin: ({ commit }) => {
            commit('setLogin');
        },
        setUpdate: ({ commit }) => {
            commit('setUpdate');
        },
    },
};
