const NotFound = () => import('modules/pages/views/404.vue')
const Chat = () => import('modules/chat/views/index.vue')
const routes = [
  {
    path: '/c/:cId',
    component: Chat,
    name: 'Halana messenger',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
    meta: {
      requiresAuth: false,
    },
  },
]

export default routes
