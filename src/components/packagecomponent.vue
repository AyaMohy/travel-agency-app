<template>
    <div>
        <!-- packagecomponent -->
        <div class="container" >
            <!-- search component -->
            <div class="container border  pt-2 mt-5 " style=" background-image: url('../../public/purple.jpg');background-repeat: no-repeat;background-size: cover; height:150px;">
                <div class=" input-group mt-5" >
                    <input type="text" v-model="searchinput" class="form-control mx-3">
                    <span @click="filterinput">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-search ms-0 me-5 " role="button" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <section class="mt-5 py-3 ps-2 border border-3" v-for="p1 in filteritem" :key="p1.id">
                <!-- package images --> {{scrollimages}}
                 <h4 class="col-12 my-3 header-caption"> {{p1.name}}</h4>
                <div class="d-flex  ">
                    <div>
                        <img  :src="p1.images[counter]" loading="lazy"  width="300" height="200" style="object-fit:contain" class="border rounded img-fade img-fluid "  alt="">
                    </div>

                    <div class="mx-4  col-4 border-end border-3">
                       
                         <p class="col-8 fs-5 text-secondary">{{p1.desc}}</p>
                         <p class="text-secondary fs-5"> <span class=" text-danger ">Price for one person:</span> {{currencyFormat(p1.price)}}</p>
                          <applink :to="{name:'book', query:{'id':p1.id}}">
                                <button class="btn  fw-bold mt-3 w-50 btn-book" style="">book now</button>
                            </applink>
                        
                    </div>

                    <div class="text-danger fs-5">
                         <div> Things To DO: 
                            <dl class="text-secondary">
                                <template v-for="(program, index) in p1.todo" :key="index">
                                     <dt  >{{program.dayNo}}</dt>
                                    <dd class="ms-5 ">{{program.program}}</dd>
                                </template>
                               
                                
                            </dl>
                        </div>
                    </div>

                </div>
              
               
            </section>
        </div>
       
    </div>
</template>

<script>
import data from '../../data.json'
import packages from '../../packages.json'
export default{ 
    data(){ 
        return{ 
            data:data.destinations,
            packages:packages.packages,
            counter:0,
            searchinput:'',
            filteritem:packages.packages
        }
    },
    computed:{ 
            scrollimages(){
            setInterval(() => {
                if(this.counter >= 2) this.counter=-1
               this.counter++; 
            }, 3000);
           
        },
         filterinput(){ 
            this.filteritem=this.packages.filter( (element)=>{
                    return (element.slug == this.searchinput) || (element.name ==this.searchinput)
                } )
        }
    },
    methods:{ 
        currencyFormat(number){ 
            return new Intl.NumberFormat('en-US',{style:"currency", currency:"USD"}).format(number)
        },
        //filterinput(){ 
           // let arr=[];
             //arr=this.packages.filter( (element)=>{
                    //return element.slug == this.searchinput
                //} )

            // if(this.searchinput !== '' || this.searchinput !== undefined){ 
            //      arr=this.packages.filter( (element)=>{
            //         return this.searchinput == element.slug
            //     } )
                //  alert(arr.name)
            // }
          //this.packages=arr;
           // console.log((arr.name))
        //}
    }
}
</script>

<style scoped>
.btn-book{ 
    border:2px solid rgb(100, 96, 218) ;
    color: rgb(100, 96, 218);
}
.btn-book:hover{ 
    background-color:rgb(100, 96, 218)  ;
    color: white;
}
</style>