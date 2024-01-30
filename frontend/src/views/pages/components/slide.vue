<template>
    <div id="style1" class="carousel slide style-custom-1" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#style1" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#style1" data-bs-slide-to="1"></li>
            <li data-bs-target="#style1" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 slide-image" src="@/assets/images/1.jpeg" alt="First slide" />
                <div class="carousel-caption">
                    <span class="badge">Lifestyle</span>
                    <h3>How To Make More Blog By Doing Less</h3>
                    <div class="media">
                        <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                        <div class="media-body">
                            <h6 class="user-name">User name</h6>
                            <p class="meta-time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                May, 14 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 slide-image" src="@/assets/images/3.jpeg" alt="Second slide" />
                <div class="carousel-caption">
                    <span class="badge">Lifestyle</span>
                    <h3>How To Make Blog</h3>
                    <div class="media">
                        <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                        <div class="media-body">
                            <h6 class="user-name">User name</h6>
                            <p class="meta-time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                May, 14 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 slide-image" src="@/assets/images/2.jpg" alt="Third slide" />
                <div class="carousel-caption">
                    <span class="badge">Lifestyle</span>
                    <h3>Best Blog Android Apps</h3>
                    <div class="media">
                        <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                        <div class="media-body">
                            <h6 class="user-name">User name</h6>
                            <p class="meta-time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                May, 14 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#style1" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#style1" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/custom-carousel.scss';
import highlight from '@/components/plugins/highlight.vue';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Carousel' });

const code_arr = ref([]);
const slide1 = ref(0);
const slide2 = ref(0);
const slide3 = ref(0);
const slide4 = ref(0);
const slide5 = ref(0);
const toggleCode = (name) => {
    if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};
</script>
