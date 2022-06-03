<template>
    <div style="background-color:rgb(204, 230, 234)">
        
        <div class="container my-5 py-5" >
            <h2 class="text-center header-caption" >Book flights in just 4 easy steps</h2>
            <p class="text-center h5">Here’s a quick overview of the process, from start to finish.</p>
            <div class="d-flex row justify-content-between ">
                <div class="col-12 col-lg-3 py-3 card-item ">
                    <div class="bg-light mx-auto py-5" style="width:270px;height:400px;border-radius: 20px;">
                        <span class="d-flex justify-content-center">
                            <img width="80"  src="../assets/search-filght-icon.svg" alt="search icon">
                        </span>
                  
                        <div class="card-body ">
                            <h4 class="pb-2">1. Search flight</h4>
                            <p>Search preferred flights and available deals by choosing your destination, your trip (one way, round trip or multi cities), arrival date, return date, number of travelers, class.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3 py-3 card-item">
                    <div class="bg-light mx-auto py-5 " style="width:270px;height:400px; border-radius: 20px;">
                        <span class="d-flex justify-content-center">
                            <img width="80"  src="../assets/book-infomation-icon.svg" alt="search icon">
                        </span>
                    
                        <div class="card-body">
                            <h4 class="pb-2">2. Fill in information</h4>
                            <p>Fill in the online form for all passengers with full names, gender, date of birth, passport details as they appear on the passenger's passport, and contact details.</p>
                        </div>
                    </div>
                </div>
                
                 <div class="col-12 col-lg-3 py-3 card-item">
                    <div class="bg-light  mx-auto py-5 " style="width:270px;height:400px;border-radius: 20px;">
                        <span class="text-center d-flex justify-content-center">
                            <img width="80"  src="../assets/make-the-payment-icon.svg" alt="search icon">
                        </span>
                    
                        <div class="card-body">
                            <h4 class="pb-2">3. Payment</h4>
                            <p>Pay your booking to secure reservations either by Credit / Debit card, Paypal Account, or wire transfer to our HSBC Bank account.
                                After payment, you may receive a follow-up email from our team for further support.</p>
                        </div>
                    </div>
                 </div>
                 
                 <div class="col-12 col-lg-3 py-3  card-item">
                    <div class="bg-light  mx-auto py-5 " style="width:270px;height:400px;border-radius: 20px;">
                        <span class="text-center d-flex justify-content-center">
                            <img width="80"  src="../assets/book-ticket-icon.svg" alt="search icon">
                        </span>
                    
                        <div class="card-body">
                            <h4 class="pb-2">4. E-ticket</h4>
                            <p>After payment is verified successfully, we will issue an E-Ticket and send it to you via email.
                                Print off your E-Ticket and make sure you keep it with you at all times during travel.</p>
                        </div>
                    </div>
                 </div>
               

            </div>
        </div>
       
    </div>
</template>

<style >
.header-caption{ 
    background-image: linear-gradient(rgb(0, 212, 244), #E91977);
    -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;

}
.card-item{ 
   transition: transform 1s;
}

.card-item:hover{ 
     transform:  translatey(-10px);
    
}
</style>