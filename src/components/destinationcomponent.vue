<template>
    <div>
        <!-- destinationcomponent -->
        <div class="container">
            <div class="row mt-5">
                <h2 class="text-center mb-5 header-caption">All Destination You Can Visit !.</h2>
                <div class="col-auto pb-4 m-auto destination-card" v-for="destination in data" :key="destination.id">
                        <div class="card p-3 " style="width:350px; background-image: linear-gradient(white,rgb(250, 240, 240) 20%, white);" >
                            <applink :to="'/destination/' + destination.id "  >
                                 <img :src="destination.image" class="card-img" height="200" :alt="destination.slug">
                            </applink>
                           
                            <div class="card-body">
                                <h3 class="card-title">{{destination.name}}</h3>
                                <p class="card-text">{{destination.desc}}</p>
                            </div>
                            <div class="card-header text-center" style="border:1px solid rgb(204, 230, 234)">
                                <span>{{destination.time}}</span>
                                
                                <p>Price: {{currencyFormatter(destination.price)}} for one person. <span class="oldprice"> ${{destination.oldprice}}</span></p>

                            </div>
                             <applink  :to="{name:'book', query:{'id':destination.id,t:'trip'}}">
                                <button class="btn border text-light fs-5 mt-3 w-100 btn-book" style="">book now</button>
                            </applink>
                        </div>
                </div>
            </div>
          

        </div>

    </div>
</template>

<script>
import data from '../../data.json'
export default{  
    data(){ 
        return{ 
            data:data.destinations
        }
    },
    methods:{  
        currencyFormatter(value){ 
            return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
        }
    }
}
</script>

<style scoped>
.oldprice{ 
    text-decoration: line-through;
    color:#666
}

.destination-card{ 
    transition: transform 1s;
}

.destination-card:hover{ 
   transform: scale(1.03);
}

.btn-book{ 
    background-image: linear-gradient(rgb(0, 212, 244), #E91977);
}
.btn-book:hover{ 
    background-image: linear-gradient(to right,rgb(0, 212, 244), #d4c2ca);
}
</style>
