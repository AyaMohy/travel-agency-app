<template>
    <div>
        <!-- logincomponent -->
        <form action=""  style="width:800px">
            <div class="container  my-3 bg-light rounded-3 shadow text-center border-info position-absolute start-0 end-0 col-12 col-md-8 col-lg-7" style="height:550px; ">
                
                <h2 class="pt-5 signheader">Sign IN</h2>
                <p>Already have an account?<br/> Enter your email address and password</p>
                <h4 class="pb-4 text-secondary">* indicates a required field</h4>
                <div class="input-group">
                    <label class="form-label col-12 text-primary col-lg-4 fs-5" for="username">Email Address: *</label>
                    <input class="form-control " type="text" id="username">
                </div>

                <div class="input-group mt-3">
                    <label class="form-label text-primary col-12 col-lg-4 fs-5" for="password">Password: *</label>
                    <input class="form-control" type="password" name="password" id="password">
                </div>
                <button class="btn mt-2 col-5 border rounded-3" style=" background-image: linear-gradient(rgb(0, 212, 244), white);">Sign In</button><br/>
                <button class="btn text-danger">forgot your password</button>
                <!-- create new account -->
                <div>
                    <p>Not a registerd user yet?<br/>
                        <button class="btn text-danger">create an account</button>
                        to apply for our
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.signheader{ 
       background-image: linear-gradient(to right,#E91977 20%,rgb(0, 212, 244), white);
   -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}


</style>