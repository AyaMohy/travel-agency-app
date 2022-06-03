<script>
import {Form, Field, ErrorMessage} from 'vee-validate'
import sourcedata from '../../data.json'
import packages from '../../packages.json'
export default{ 
    components:{ 
        Field,
        Form,
        ErrorMessage,
    },
    data(){
        return{ 
             isdialogvisible:false,
             sourcedata:sourcedata.destinations,
             packages:packages.packages,
             count:0
        }
       
    },

      methods: {
        isRequired(value) {
        if (value && value.trim()) {
            return true;
        }
        return 'This field is required';
        },

        bookuser(){ 
            alert("login is done")
        },
         currencyFormat(number){ 
            return new Intl.NumberFormat('en-US',{style:"currency", currency:"USD"}).format(number)
        },
    },
    computed:{ 
       returneddestination(){ 
           if(this.$route.query.t =="trip"){
                return this.sourcedata.find( (item)=>{ 
                    return item.id ==this.$route.query.id
                } )
           }else{
                return this.packages.find( (item)=>{ 
                    return item.id ==this.$route.query.id
                } )
           }
         
       } 
    }

}
</script>
<template>
    <div style="background-image:url('../../public/bg-gray.svg');height: 700px;">
        <section class="container ">
            <div class="border mx-auto text-center pb-5 px-5 bg-light col-10" style="margin-top:120px;">
                <img src="" alt="">
                <h1 class="text-center mb-5 bookheading">
                    <span >B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span> &nbsp;
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                </h1> 
                <div class="w-75 mx-auto text-danger"> <hr></div>
                <dialog id="modeldialog" :open="isdialogvisible" class="border-1 col-3 border-info">
                    <div class="alert alert-info" role="alert">
                        {{currencyFormat(returneddestination.price * count)}}
                    </div>

                    <form method="dialog">
                        <button class="btn btn-info text-white fs-5" >OK</button>
                    </form>

                    
                </dialog>
                <Form @submit.prevent="bookuser">
                    <label for="username" class="form-label pt-2 d-block text-center fs-4">Your Name:</label>
                    <Field name="username" :rules="isRequired" type="text" id="username" class="form-control" />
                     <ErrorMessage name="username" class="text-danger"/>
                    <label for="email" class="form-label d-block text-center fs-4">Your Email Address:</label>
                    <Field name="email" :rules="isRequired" type="email" id="email" class="form-control" />
                    <ErrorMessage name="email" class="text-danger"/>
                    <label for="to" class="form-label d-block text-center fs-4">where to</label>
                    <Field type="text" name="to"  :rules="isRequired" class="form-control" :value="returneddestination.name" disabled />
                    <ErrorMessage  name="to" class="text-danger d-block"/>
                    <label for="numbers" class="form-label d-block text-center fs-4">Number of Person</label>
                    <Field type="number" v-model="count" name="numbers"  :rules="isRequired" class="form-control" />
                    <div class="input-group my-3">
                        <span type="text" class="fs-4 text-start form-control border-0 bg-transparent ">If You need Your Total Price Press total Price Button</span>
                        <!-- <button class="btn text-dark btn-sm fs-5 btn-outline-secondary"  >total price</button> -->
                        <button  @click.prevent="isdialogvisible=true"  class="btn fs-5  text-white border px-5 " style="background-image: linear-gradient(to right,gray ,rgb(0, 212, 244) , gray );height:50px !important">total</button>
                    </div>
  

                    
                    <ErrorMessage  name="numbers" class="text-danger d-block"/>
                    <button class="btn fs-5 d-block text-light border w-100 mt-4 px-5 " style="background-image: linear-gradient(to right, #E91977,rgb(0, 212, 244));">Book</button>
                </Form>

                <!-- <div style="clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);background-color:red; height: 300px;width: 100px;">e</div> -->
      
            </div>
        </section>

       
    </div>
</template>

<style >
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