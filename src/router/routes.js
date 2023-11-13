const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
<<<<<<< HEAD
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
=======
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/inscrever", component: () => import("pages/RegisterPage.vue") },
      { path: "/sobre", component: () => import("pages/SobrePage.vue") },
    ],
>>>>>>> 14b3777ed38e4717ecf6e7a2ba04580a3f9b6729
  },
  {
<<<<<<< HEAD
=======
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", component: () => import("pages/admin/LoginPage.vue") },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("pages/admin/DashboardPage.vue"),
      },
      {
        path: "/admin/usuarios",
        component: () => import("pages/admin/users/UsersPage.vue"),
      },
      {
        path: "/admin/usuarios/novo-usuario",
        component: () => import("pages/admin/users/FormUsers.vue"),
      },
      {
        path: "/admin/corridas",
        component: () => import("pages/admin/runs/RunsPage.vue"),
      },
      {
        path: "/admin/corridas/nova-corrida",
        component: () => import("pages/admin/runs/FormRuns.vue"),
      },
      {
        path: "/admin/atletas",
        component: () => import("pages/admin/athletes/AthletesPage.vue"),
      },
      {
        path: "/admin/perfil",
        component: () => import("pages/admin/users/ProfileUser.vue"),
      },
    ],
  },
  {
>>>>>>> 14b3777ed38e4717ecf6e7a2ba04580a3f9b6729
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
