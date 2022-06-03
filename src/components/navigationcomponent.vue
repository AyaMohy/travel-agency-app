<script>
import applink from "./applink.vue";
import logincomponent from './logincomponent.vue'
export default{ 
 components:{
     logincomponent
 },  

data(){ 
    return{ 
        status:true,
        issearchbarvisible:false,
        isloginvisible:false
    }
},
methods:{ 
    showsigninform(){
        // this.$emit('show-sign-in', true)
        window.statusbar=true
    },
},
computed:{ 
    checkstatus(){ 
        return window.statusbar='hhh' 
    }
}
}
</script>

<template>
    <div>
       
       <div class="">
            <nav class="navbar shadow-lg fixed-top  navbar-expand-lg p-3 navbar-dark bg-primary ">
                <div class="container ">  
                    <span class="nav-brand col-3 fs-2 " >TRAVEL</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartop">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbartop">
                            <ul class="navbar-nav me-auto fs-5  mb-2 mb-lg-0">
                                <li class="nav-item px-4 " ><applink  style="color:red;cursor:pointer" to="/">Flights</applink></li>
                                <li class="nav-item px-4"><applink to="/packages"> Packages</applink> </li>
                                <li class="nav-item px-4 "><applink to="/services">Services</applink></li>
                                <!-- <li class="nav-item px-4"><applink to="/reviews">Reviews</applink></li> -->
                            </ul>
                    </div>

                    <div class="">
                        <button class="btn me-4" @click="showsigninform">
                            <svg xmlns="http://www.w3.org/2000/svg"  @click.prevent="isloginvisible=!isloginvisible" width="26" height="26" fill="white" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>
                    <span>
                            <span class="btn text-white fs-5">+203456789</span>
                    </span>

                    <!-- <form  v-if="issearchbarvisible" class="search-bar-container position-absolute top-100 start-0 end-0 p-2">
                        <input class="form-control mx-5" type="search" name="" id="search-bar">
                        <label for="search-bar" class="fas fa-search"></label>
                    </form> -->
                    </div>
                    
            
                </div>
                <div v-if="isloginvisible"   class="search-bar-container d-flex position-absolute top-100 start-0 end-0  " >  
                    <logincomponent/>
                </div>
            </nav>
              
       </div>

    </div>
</template>

<style>
.nav-brand{ 
    background-image: linear-gradient(rgb(0, 212, 244), white, #E91977);
   -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
   
}

.search-bar-container{ 
    background-color:rgb(204, 230, 234);
    align-items: center;
    /* height: 500px; */
    /* opacity: 0%; */
      animation:  show 2s ;
}
@keyframes show {
    from{opacity: 0%;}
    to{ opacity: 100%;}
    
}
</style>