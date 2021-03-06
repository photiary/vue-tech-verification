const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainPage.vue'),
    children: [
      {
        // Back 버튼으로 새로운 레이어을 닫기 위해 가짜 패스
        name: 'main.layer',
        path: 'layer',
      },
    ],
  },
  {
    name: 'registryItem',
    path: '/registryItem',
    component: () => import(/* webpackChunkName: "main" */ '@/views/RegistryItemPage.vue'),
    children: [

    ],
  },
  {
    name: 'itemInfo',
    path: '/itemInfo',
    component: () => import(/* webpackChunkName: "main" */ '@/views/ItemInfoPage.vue'),
    children: [

    ],
  },
  {
    name: 'userInfo',
    path: '/userInfo',
    component: () => import(/* webpackChunkName: "main" */ '@/views/UserInfoPage.vue'),
    children: [

    ],
  },
  {
    name: 'vModel',
    path: '/vModel',
    component: () => import(/* webpackChunkName: "main" */ '@/views/vModel/VModelPage.vue'),
    children: [

    ],
  },
  {
    name: 'routeToggle',
    path: '/routeToggle',
    component: () => import(/* webpackChunkName: "main" */ '@/views/routeToggle/RouteTogglePage.vue'),
    children: [
      {
        name: 'toggle',
        path: 'toggle/:name',
      },
    ],
  },
];

export default routes;