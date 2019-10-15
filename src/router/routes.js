
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dash', component: () => import('pages/dash.vue') },
      { path: 'produto', component: () => import('pages/produto.vue') },
      { path: 'dadores', component: () => import('pages/dadores.vue') },
      { path: 'registroDador', component: () => import('pages/forms/registroDador.vue') },
      { path: 'triagem', component: () => import('pages/Triagem.vue') }


    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
