import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ShowComponent from "@/components/ShowComponent.vue";

const routes = [
{
    path: "/",
    name: "home",
    component: CreateComponent,
},
{
    path: "/view",
    name: "view",
    component: ListComponent,
},
{
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
},
{
    path: "/show",
    name: "show",
    component: ShowComponent,
},
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;