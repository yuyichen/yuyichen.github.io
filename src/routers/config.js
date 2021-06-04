export default [
  {
    title: '首页',
    path: '/',
    component: 'home/index',
  },
  {
    title: '文章页',
    path: '/post/:title',
    component: 'post/index',
  },
  {
    title: '文章编辑页',
    path: '/editPost/:title',
    component: 'post/edit',
  },
];
