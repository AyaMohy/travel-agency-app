<template>
    <div>
        <section class="container mb-5" style="margin-top:130px">
            <h1 class="text-center mb-3 bookheading">
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                    <span>S</span>
            </h1> 
            <div class="d-flex flex-wrap justify-content-between">
                <div class="card my-5 " style="width:350px">
                    <img src="../assets/hotel.png" width="80" alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Affordable Hotels</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>
                <!-- 2 -->
                <div class="card my-5" style="width:350px">
                    <img src="../assets/foods.png" width="80"  alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Food and Drinks</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>
                <!-- 3 -->
                <div class="card my-5 " style="width:350px">
                    <img src="../assets/safty.png" width="80" alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Safty Guides</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>

                <!-- 4 -->
                <div class="card " style="width:350px">
                    <img src="../assets/world.png" width="80" alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Around the world</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>
                <!-- 5 -->
                <div class="card " style="width:350px">
                    <img src="../assets/fast.png" width="80" alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Fastesd Travel</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>
                <!-- 6 -->
                <div class="card " style="width:350px">
                    <img src="../assets/adventure.png" width="80" alt="" class="img-fluid mt-4 mx-auto">
                    <div class="card-body">
                        <h3 class="header-caption text-center">Adventures</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates dignissimos, itaque assumenda recusandae veritatis sed quisquam et ad voluptatibus? A, eius dignissimos officiis deleniti fugit sapiente animi deserunt nostrum.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.bookheading span{ 
    background-color: rgb(187, 240, 240);
    color:rgb(219, 28, 136);
    padding: 4px 10px;
    display: inline-block;
    border-radius: 15px;
    margin: 10px;
    box-shadow: 0px 0px 4px 3px rgb(187, 240, 240);
}

.card{ 
    transition: transform 1s;
}

.card:hover{ 
   transform: scale(1.03);
  background-color:rgb(204, 230, 234)
}
</style>