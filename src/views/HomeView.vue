<script >
import caroselheadercomponent from '../components/caroselheadercomponent.vue'
import destinationcomponent from '../components/destinationcomponent.vue'
import bookstepexplain from '../components/bookstepexplain.vue'
export default{ 
  components:{ 
    caroselheadercomponent,
    destinationcomponent,
    bookstepexplain
    
  },
  data(){
    return{ 

    }
  },
  methods:{ 
  
  }
}
// show-sign-in
</script>

<template>
  <main class="main">
    <div class="" >
       <!-- <caroselheadercomponent :issignvisible="true"/> -->
        <caroselheadercomponent />
    </div>
   
  </main>
  <section>
    <destinationcomponent/>
  </section>
  <section>
    <bookstepexplain/>
  </section>
</template>

<style scoped>

  .main{ 
    height: 600px;
    /* background-image: url('../assets/bg1.webp'); */
    /* background-image: url('../assets/nature1920.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #C4DDE2;
   
  }
 
</style>
