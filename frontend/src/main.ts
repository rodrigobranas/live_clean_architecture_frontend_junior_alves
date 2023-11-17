import { createApp } from 'vue'
import App from "./App.vue";
import TodosGatewayHttp from './infra/TodosGatewayHttp';
import './style.css'
import AxiosAdapter from './infra/http/AxiosAdapter';
import FetchAdapter from './infra/http/FetchAdapter';

const app = createApp(App);
const httpClient = new AxiosAdapter();
const todosGateway = new TodosGatewayHttp(httpClient);
app.provide("todosGateway", todosGateway);
app.mount('#app');
