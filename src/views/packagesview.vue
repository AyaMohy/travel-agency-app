<script>
import packagecomponent from '../components/packagecomponent.vue'
export default{ 
    components:{ 
        packagecomponent
    },
    data(){ 
        return{ 

        }
    }
}
</script>
<template>
    <div class="container " style="margin-top:130px">
            <h1 class="text-center mb-3 bookheading">
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
            </h1> 
        <h2 class="header-caption  col-8 mx-auto text-center">Why book a vacation package instead of separate flights and hotels?</h2>
        <p class="col-10 mx-auto text-center">With our vacation packages, you don’t need to worry about booking everything separately, because flights and accommodation are included in the price, often saving you money. Vacation packages may also include additional extras such as transfers to help your holiday go as smoothly as possible.</p>
    </div>


   
    <main>
        <packagecomponent/>
    </main>
</template>

<style>
.he{ 
    background-image: url('../assets/purple.jpg');
}

.bookheading span{ 
    background-color: rgb(187, 240, 240);
    color:rgb(219, 28, 136);
    padding: 4px 10px;
    display: inline-block;
    border-radius: 15px;
    margin: 10px;
    box-shadow: 0px 0px 4px 3px rgb(187, 240, 240);
}
</style>