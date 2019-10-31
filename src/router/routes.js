
const routes = [ 

  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: '/',  component: () => import('layouts/MyLayout.vue') },
      
 
    ]
  },




  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dash', component: () => import('pages/Index.vue') },
      { path: 'produto', component: () => import('pages/produto.vue') },
      { path: 'dadores', component: () => import('pages/dadores.vue') },
      { path: 'sangue', component: () => import('pages/grupo.vue') },
      { path: 'doacao', component: () => import('pages/Doacao.vue') },
      { path: 'registroDador', component: () => import('pages/forms/registroDador.vue') },
      { path: 'triagem', component: () => import('pages/Triagem.vue') },
      { path: 'agendamento', component: () => import('pages/agendamento.vue') },
      { path: 'marcar', component: () => import('pages/forms/marcarAgendamento.vue') },
      { path: 'marcarTriagem', component: () => import('pages/forms/marcarTriagem.vue') },
      { path: 'registroDaocao', component: () => import('pages/forms/registroDaoacao.vue') }


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
