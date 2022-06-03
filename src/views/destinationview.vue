<script>
import data from '../../data.json'

export default{ 
    data(){ 
        return{ 
            data: data.destinations,
            counter:-1,
            counter2:2
        }
    },
    props:['id'],
    methods:{ 
         previous(){ 
             this.counter2--;
            if(this.counter2 <0) this.counter2= 2
        },
        next(){ 
            this.counter2 ++;
            if(this.counter2 >2) this.counter2 =0
        },
        currencyFormat(number){ 
            return new Intl.NumberFormat('en-US',{style:'currency',currency:"USD"}).format(number)
        }
    },
    computed:{ 
        destinationId(){ 
            return this.data.find( (destination)=>{ 
                return destination.id == this.id
            } )
        },
        scrollimages(){
            // let counter =0;
            setInterval(() => {
                if(this.counter >= 2) this.counter=-1
                // console.log(counter)
                //  return counter
               this.counter++; 
            }, 3000);
            // console.log(this.counter)
           
        },
       
    }

}
</script>
<template >
    <div class="" style="background-image:url('../../public/bg-gray.svg');margin-top: 120px;">
       <div class="d-flex mt-5 container">
           <div class="col-6">
               <img :src="destinationId.image" class="img-fluid "  srcset="../assets/bg1.webp" :alt="destinationId.slug">
           </div>

           <div class="ms-0 ps-5 col-6 bg-white " style="">
                <p class="fs-2 text-info">{{destinationId.name}}</p>
                <p class="">{{currencyFormat(destinationId.price)}}</p>
                <applink  :to="{name:'book', query:{'id':destinationId.id}}">
                     <button class="btn px-4 text-light btn-book border rounded-3 fs-4" style="">book now</button>
                </applink>
           </div>
           
       </div>
<!-- <div class="container mt-5"> <hr>  </div> -->
        <div class="my-3  py-5" style="">
           <div class="container bg-light  pt-5 ">
               <h2 class="me-5 text-center header-caption pb-4">Programs for the your trip</h2>
               <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quis reprehenderit quos. Ducimus rerum omnis, numquam minima voluptatem impedit consequatur ratione. Iste corporis fuga unde autem, nihil illum id ab!</p>
               <section class="row">
                        <div v-for="program in destinationId.todo" class="col-md-4"  :key="program.id">
                            <div class=" text-center border-light border-start border-end pb-0 mt-5">
                                
                                <h3 class="text-primary">{{program.dayNo.toUpperCase()}}</h3>
                                <p class="h5 pb-3">{{program.program}}</p>
                                <!-- <img :src="program.image" class="border rounded img-fluid" width="250" alt=""> -->
                                <img  :src="program.image[counter]" loading="lazy"  width="250" height="200" style="object-fit:contain" class="border rounded img-fade img-fluid "  alt="">
                            </div>
                   
                        </div>
               </section>
              
                    <p>{{scrollimages}}</p>
                   
               
               
           </div>
         
       </div>
        <div class="container"> <hr>  </div>
        <div class="my-5  shadow py-5" style="">
           <div class="container   pt-5">
               <div class="bg-info bg-gradient shadow py-4">
                    <h2 class="me-5 text-center header-caption pb-4">Where To Stays ?</h2>
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quis reprehenderit quos. Ducimus rerum omnis, numquam minima voluptatem impedit consequatur ratione. Iste corporis fuga unde autem, nihil illum id ab!</p>
               </div>
              
               <section class="row">
                        <div  v-for="(stay ) in destinationId.stays" :key="stay.id" class="col-md-6" >
                            <div class="border bg-light text-center border-info pb-4 border-bottom-0 border-end pb-0 mt-5">
                                
                                <h3 class="text-white rounded bg-info py-3 bg-gradient">{{stay.name.toUpperCase()}}</h3>
                                <p class="h5 pb-3 " style="height:60px">{{stay.desc}}</p>
                                <!-- <img :src="program.image" class="border rounded img-fluid" width="250" alt=""> -->
                                <span @click="previous" style="cursor:pointer" class="fs-1 text-info fw-bold  bg-gradient p-1 me-3 rounded-pill">	&#8592;</span>
                                <img  :src="stay.image[counter2]" loading="lazy"  width="250" height="200" style="object-fit:contain" class="border-1 border border-light rounded  img-fluid "  alt="">
                                <span @click="next" role="button" class="fs-1 fw-bold text-info  bg-gradient p-1 ms-3 rounded-pill">	&#8594;</span>
                            </div>
                   
                        </div>
               </section>
              
                    <!-- <p>{{scrollimages}}</p> -->
                   
               
                
           </div>
           
       </div>
         

      
       
    </div>
</template>

<style scoped>

.header-caption{ 
    background-image: linear-gradient(#E91977 20%,gray 50%, #000 10% );
    -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;

}
.img-fade{ 
    animation: imgfade 3s infinite ;
   
}
@keyframes imgfade {
   from{opacity:20%} 
   to{opacity: 100%;}
}

.btn-book{ 
    background-image: linear-gradient(rgb(0, 212, 244), #E91977);
}
.btn-book:hover{ 
    background-image: linear-gradient(to right,rgb(0, 212, 244), #E91977);
    color: black !important;
}
</style>

