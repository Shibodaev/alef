import { createRouter, createWebHistory } from "vue-router";
import FormView from "../views/FormView.vue";
import PreviewView from "../views/PreviewView.vue";

const routes = [
  {
    path: "/forms",
    name: "Форма",
    component: FormView,
    meta: { title: "Форма" },
  },
  {
    path: "/preview",
    name: "Превью",
    component: PreviewView,
    meta: { title: "Превью" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
