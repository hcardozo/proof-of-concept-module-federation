import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import ReactTestComponent from './ReactTestComponent';

const VueRemoteAppComponent = defineAsyncComponent(() => import('vueRemoteApp/VueRemoteAppComponent'));


// const routes = [
//     { path: '/', component: HomeView },
//     { path: '/ng/testComponent', component: () => import("angularRemoteApp/TestComponent") },
// ]

// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// });


const app = createApp(App);

// app.use(router);
// react component
app.component('react-test-component', ReactTestComponent);

// vue component
app.component('vue-remote-app-component', VueRemoteAppComponent);

app.mount('#app');
