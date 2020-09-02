
const routes = [ 

  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
        { path: '/', component: () => import('pages/auth/Login.vue') },
        { path: '/register', component: () => import('pages/auth/Register.vue') },

    ]
},


  {
    path: '/userdash',
    component: () => import('layouts/User.vue' ),
    children: [
      { path: '/menu', component: () => import('pages/UserGuest.vue') },
      { path: '/dador-reg', component: () => import('pages/forms/user-dador.vue'), props: true  },
     
     
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      
 
    ]
  },




  {
    path: '/admin',
    component: () => import('layouts/MyLayout.vue' ),
    children: [
      { path: '', component: () => import('pages/Index.vue'), props: true , name: "PageIndex" },
      { path: '/dash', component: () => import('pages/Index.vue') },
      { path: '/produto', component: () => import('pages/produto.vue') },
      { path: '/dadores', component: () => import('pages/dadores.vue') },
      { path: '/sangue', component: () => import('pages/grupo.vue') },
      { path: '/doacao', component: () => import('pages/Doacao.vue') },
      { path: '/registroDador', component: () => import('pages/forms/registroDador.vue') },
      { path: '/triagem', component: () => import('pages/Triagem.vue') },
      { path: '/users', component: () => import('pages/UsersPage.vue') },
      { path: '/roles', component: () => import('pages/userRoles.vue') },
      { path: '/agendamento', component: () => import('pages/agendamento.vue') },
      { path: '/marcar', component: () => import('pages/forms/marcarAgendamento.vue') },
      { path: '/inaptidao', component: () => import('pages/forms/inaptidao.vue') },
      { path: '/marcarTriagem', component: () => import('pages/forms/marcarTriagem.vue') },
      { path: '/registroDaocao', component: () => import('pages/forms/registroDaoacao.vue') },
      { path: '/produto', component: () => import('pages/produto.vue') },
      { path: '/cancelar', component: () => import('pages/imprevists/cancelar.vue') },
      { path: '/adiar', component: () => import('pages/imprevists/adiar.vue') },
    { path: '/donor/:id', component: () => import('pages/DonorDatailsPage.vue') },



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
