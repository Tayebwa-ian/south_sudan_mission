
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'activities', component: () => import('pages/ActivitiesPage.vue') },
      { path: 'donate', component: () => import('pages/DonatePage.vue') },
      { path: 'team', component: () => import('pages/TeamPage.vue') },
      { path: 'news', component: () => import('pages/NewsPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
