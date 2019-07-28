import Vue from 'vue'
import Router from 'vue-router' 
import list from '../components/list' 
 import products from '../components/products'
 import Toaster from 'v-toaster'
 import 'v-toaster/dist/v-toaster.css'
 import addProduct from '../components/addProduct'
 

 Vue.use(Router)
 Vue.use(Toaster, {timeout: 5000})
 

export default new Router({
  routes: [
    {
      path:'/Products',
      name:'/Products',
      component:products
    },
    {
      path:'/addProduct',
      name:'/addProduct',
      component:addProduct
    }, 
    {
      path: '/list', 
      name: 'list',
      component: list
    }, 
    
  ]
})

Vue.filter('shorttoupper',function(value){
    
    return value = value.stringify()
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  })};