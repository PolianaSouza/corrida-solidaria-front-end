const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/InicioPage.vue") }],
  },
  {
    path: "/inscrever",
    component: () => import("layouts/MainLayoutRegister.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
  },
  {
    path: "/sobre",
    component: () => import("layouts/MainLayoutSobre.vue"),
    children: [{ path: "", component: () => import("pages/SobrePage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
