<template>
    <div class="position-relative ">
        <!-- caroselheadercomponent -->
        <div id="carouselExampleCaptions" style="height:600px" class="carousel  slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div style="width:100%;height:600px;">
                        <img src="../assets/best-trip.webp" class="d-block w-50 float-end h-100" >
                    </div>
                    <div style="background-image: linear-gradient(rgb(0, 212, 244), #327184);" class="pt-5 carousel-caption d-none  h-100 top-0 start-0 end-50  d-md-block">
                        <h5 class="mt-5 mb-4">Adenture Is Worthwhile</h5>
                        <p> Discover new places with us. Adventure awaits You!</p>
                        <!-- <button class="btn bg-light mt-5">book now</button> -->
                   </div>
                </div>
                <div class="carousel-item ">
                    <div style="width:100%;height:600px;"> 
                      <img src="../assets/nature1920.jpg" class="d-block float-end h-100" alt="...">
                    </div>
                    <div style="background-image: linear-gradient(rgb(0, 212, 244), #327184);" class="pt-5 carousel-caption d-none d-md-block bg-danger h-100 start-0 end-50 bottom-0">
                        <h5 class="mt-5 mb-4">Adenture Is Worthwhile</h5>
                        <p>Discover new places with us. Adventure awaits You!</p>

                        <!-- <button class="btn bg-light mt-5">book now</button> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <div style="width:100%;height:600px;">
                         <img src="../assets/bg3.webp"  class="d-block float-end w-50 h-100" alt="...">
                    </div>
  
                    <div style="background-image: linear-gradient(rgb(0, 212, 244),gray);" class="pt-5 carousel-caption d-none d-md-block h-100 start-0 end-50 bottom-0">
                        <h5 class="mt-5 mb-4">Adenture Is Worthwhile</h5>
                        <p>Discover new places with us. Adventure awaits You!</p>
                        <!-- <button class="btn bg-light mt-5">book now</button> -->
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span  class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> 
        <!-- login form -->
        <div class="position-absolute  w-100 top-0">
             <logincomponent v-if="issignvisible"/>
        </div>

    </div>
</template>


<script>
import logincomponent from '../components/logincomponent.vue'

export default { 
    components:{ 
        logincomponent
    },
    computed:{ 
    //    issignvisible(){ 
    //        return window.statusbar
    //    } 
        
    }
    ,
    data(){ 
        return { 
            issignvisible:false
        }
    },
    // props:['issignvisible']
}
</script>


<style>
:root{ 
    --orange:gray;
}
::selection{ 
    background-color: var(--orange);
    color:white;
    -webkit-text-fill-color: white;
}
</style>