import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import data from '../../data.json'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias:"/home"
    },
    {
      path:"/book",
      name:"book",
      component:()=>import("../views/bookview.vue")
    },
    {
      path:"/destination/:id(\\d+)",
      name:"destination.show",
      props:true,
      component:()=>import('../views/destinationview.vue'),
      beforeEnter(to,from){ 
        const exist=data.destinations.find((destination)=>{
          return destination.id ===parseInt(to.params.id)
        } );
        if(!exist){
          return { 
            name:'404view',
            query:to.query,
            hash:to.hash,
            params:{pathMatch:to.path.split('/').slice(1)}
          }
        }
      }
    },
    { 
      path:'/packages',
      name:'packages',
      component:()=>import("../views/packagesview.vue")
    },
    { 
      path:'/privacypolicy',
      name:"privacypolicy",
      component:()=>import("../views/privacypolicyview.vue")
    },
    { 
      path:'/about',
      name:"about",
      component:()=>import("../views/aboutview.vue")
    },
    { 
      path:'/services',
      name:"serviceview",
      component:()=>import('../views/serviceview.vue')
    },
    { 
      path:'/reviews',
      name:"reviews",
      component:import('../views/reviewdisplayview.vue')
    },
    {
      path:"/:pathMatch(.*)*",
      name:"404view",
      component:import("../views/404view.vue")
    }
  ],
  linkActiveClass: " activeLink",
  scrollBehavior(to, from, savedPosition){
    return savedPosition||new Promise( (resolve)=>{
      setTimeout(()=>resolve({top:0, behavior:"smooth"}), 300 )
    })
  },
  
})

export default router
