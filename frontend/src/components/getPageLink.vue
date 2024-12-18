<template>
    <div class="d-flex" v-if="visible">
        <div :style="{ background: backgroundStyle }" class="link-container flex-grow-1">
            <img v-if="link.showProfilePicture && link.linkProfile" :src="link.linkProfile" alt="Profile"
                class="profile-picture">
            <a v-for="link in link.links" :key="link.id" :href="link.href" target="_blank" rel="noopener noreferrer"
                :style="buttonStyle" class="btn rounded-pill my-2 px-5 py-3">
                <i :class="returnIcon(link)"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;{{ link.label }}
            </a>
            <button v-if="link.showShareLink" :style="buttonStyleShare"
                class="btn rounded-pill my-2 px-5 py-3">Compartilhar</button>
        </div>
    </div>

</template>

<script>
import router from '@/router';
import LinkService from '@/service/link-service';

export default {

    data() {
        return {
            visible: false,
            link: {}
        };
    },
    computed: {
        backgroundStyle() {
            if (this.link.backgroundImage) {
                return `url(${this.link.backgroundImage})`;
            } else {
                return `linear-gradient(${this.link.backgroundColor1}, ${this.link.backgroundColor2})`;
            }
        },
        buttonStyle() {
            return { background: this.link.buttonColor, borderColor: this.link.buttonBorderColor };
        },
        buttonStyleShare() {
            return { background: this.link.backgroundColor1, borderColor: this.link.buttonBorderColor };
        },
    },
    async created() {

        if (this.$route.params.company != 'novo') {
            const getLink = new LinkService({}, '', `/api/pageLink/getlink-company/${this.$route.params.company}`);
            const findLink = await getLink.getLink();
            if (findLink.id) {
                console.log(findLink)
                this.link = findLink;
                this.visible = !this.visible;

            }
        };
    },
    mounted() {


    },
    methods: {
        returnIcon(link) {
            return link.icon ? `bi bi-${link.icon}` : ''
        },
        back() {
            router.go(-1);
        }
    },
};
</script>

<style>
.link-container {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
}

.profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.settings-modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100vh;
    background-color: #fff;
    border-left: 1px solid #fff;
    overflow-y: auto;
    z-index: 1040;
}

.toggle-modal-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1050;
}

.save-btn {
    position: fixed;
    bottom: 20px;
    right: 80px;
    z-index: 1050;
}

.ver-btn {
    position: fixed;
    bottom: 20px;
    right: 240px;
    z-index: 1050;
}
</style>