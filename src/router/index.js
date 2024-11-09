
import { createRouter, createWebHistory } from 'vue-router';
 import Bai1 from '../components/Lab1/Bai1.vue';
 import Bai2 from '../components/Lab1/Bai2.vue';
 import Bai3 from '../components/Lab1/Bai3.vue';
 import Bai4 from '../components/Lab2/Bai1.vue';
 import Bai5 from '../components/Lab2/Bai2.vue';
 import Lab3Bai1 from '../components/Lab3/Bai1.vue';
 import Lab3Bai2 from '../components/Lab3/Bai2.vue';
 import Lab3Bai3 from '../components/Lab3/Bai3.vue';
 import Lab3Bai4 from '../components/Lab3/Bai4.vue';




// import About from '../components/About.vue';
// import Lab1 from '../components/lab1/b3.vue'
// import BlogPage from '../components/Blog.vue'

const routes = [

     { path: '/Lab1/B1', component: Bai1 },
     { path: '/Lab1/B2', component: Bai2 },
     { path: '/Lab1/B3', component: Bai3 },
     //lab2
     { path: '/Lab2/Bai1', component: Bai4 },
     { path: '/Lab2/Bai2', component: Bai5 },
     //lab3
     { path: '/Lab3/Bai1', component: Lab3Bai1 },
     { path: '/Lab3/Bai2', component: Lab3Bai2 },
     { path: '/Lab3/Bai3', component: Lab3Bai3 },
     { path: '/Lab3/Bai4', component: Lab3Bai4 },


    // { path: '/Lab1/b1', component: Lab1 },
    // { path: '/blog', component: BlogPage },
    // { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
