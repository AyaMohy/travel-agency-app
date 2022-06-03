<script >
import { RouterLink, RouterView } from 'vue-router'
import navigationcomponent from './components/navigationcomponent.vue'
import footercomponent from './components/footercomponent.vue'
// import logincomponent from './components/logincomponent.vue'
// https://www.momondo.com/stays
// https://www.travelner.com/flight/list
// https://www.expedia.com/Flights?AID=11552045&PID=8196909&URL=https%3A%2F%2Fwww.expedia.com%2FFlights&affcid=network.cj.8196909.11552045.&cjevent=1ce97d26db6311ec815babc10a180514
// https://pixabay.com/photos/search/travel/
export default{ 
  components:{ 
    navigationcomponent,
    footercomponent
  },
    data(){ 
    return{ 
      issignvisible:false
    }
  },
  methods:{ 
      showform(status){
        this.issignvisible=status
        //  alert("hi every")
    }
  },

}
</script>

<template>
  <div>
     <header>
       <!-- <navigationcomponent @show-sign-in="showform" /> -->
       <navigationcomponent />
     </header>

     <main style="margin-top:90px">
     <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div :key="$route.path">  
            <component :is="Component"></component>
          </div>
        </transition>
    </router-view>
     </main>

      <footer>
        <footercomponent/>
      </footer>
  </div>
 

 
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
