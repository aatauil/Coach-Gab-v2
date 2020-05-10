<template>
  <section class="ibooking-container">
      <img class="ibooking-dots_1" src="../assets/icons/decoration/grid-dots2.svg" alt="dots">
      <a href="#" class="next-button" >Booking info</a>
      <div class="ibooking-top">
        <article class="ibooking-header">
            <h1 class="ibooking-header_title">Booking<span class="red-text">.</span></h1>
            <p class="ibooking-header_text">Booking with coach Gab brings many advantages and is easier than ever. Discover the advantages on this page.</p>
        </article>
        <article class="ibooking-pay">
            <h2 class="ibooking-pay_title">Payement Methodes</h2>
            <div class="ibooking-pay_list">
                
                <div class="tooltip"><img class="payement-icon bancontact-icon"  src="../assets/icons/payment/bancontact.svg" alt="Bancontact icon"><span class="tooltiptext">Bancontact</span></div>
                <div class="tooltip"><img class="payement-icon apple-icon" src="../assets/icons/payment/applepay.svg" alt="ApplePay icon"><span class="tooltiptext">ApplePay</span></div>
                <div class="tooltip"><img class="payement-icon belfius-icon" src="../assets/icons/payment/belfius.svg" alt="Belfius icon"><span class="tooltiptext">Belfius</span></div>
                <div class="tooltip"><img class="payement-icon ing-icon" src="../assets/icons/payment/inghomepay.svg" alt="Ing icon"><span class="tooltiptext">ING</span></div>
                <div class="tooltip"><img class="payement-icon kbc-icon" src="../assets/icons/payment/kbc.svg" alt="Kbc icon"><span class="tooltiptext">KBC</span></div>
                <div class="tooltip"><img class="payement-icon maestro-icon" src="../assets/icons/payment/maestro.svg" alt="Maestro icon"><span class="tooltiptext">Maestro</span></div>
                <div class="tooltip"><img class="payement-icon mastercard-icon" src="../assets/icons/payment/mastercard.svg" alt="Mastercard icon"><span class="tooltiptext">Mastercard</span></div>
                <div class="tooltip"><img class="payement-icon paypal-icon" src="../assets/icons/payment/paypal.svg" alt="Paypal icon"><span class="tooltiptext">Paypal</span></div>
                <div class="tooltip"><img class="payement-icon visa-icon" src="../assets/icons/payment/visa.svg" alt="Visa icon"><span class="tooltiptext">Visa</span></div>
                <div class="tooltip"><img class="payement-icon cash-icon" src="../assets/icons/payment/cash.svg" alt="Cash icon"><span class="tooltiptext">Cash</span></div>
            </div>
            <p class="secure-payement">All our payement methodes are secured by • <a class="mollie" href="https://www.mollie.com/features/security">Mollie</a>•</p>
        </article>
      </div>
      <div class="ibooking-middle">
           <img class="ibooking-dots_2" src="../assets/icons/decoration/grid-dots2.svg" alt="dots">
           <swiper class="ibooking-item-wrapper" ref="bookingSwiper" :options="bookingOptions" :auto-update="true" :auto-destroy="false">
                <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/appointment.svg" alt="appointment icon">
                    <h3 class="ibooking-item_title">Book and Pay <span class="red-text">Online!</span></h3>
                    <p class="ibooking-item_text">Easily book and pay online! 5 minutes is all you need. We provide many payement methodes and even the possibility to pay cash. Book now!</p>
                </swiper-slide>
                 <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/notification-fill.svg" alt="notification icon">
                    <h3 class="ibooking-item_title">E-mail Reminder </h3>
                    <p class="ibooking-item_text">Get an E-mail reminder <b>2 hours</b>  in advance. This way you will never miss a workout. Rather get a text message? No problem we got you covered!</p>
                </swiper-slide>
                 <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/list.svg" alt="list icon">
                    <h3 class="ibooking-item_title">Multi-Session <span class="red-text">Pass </span></h3>
                    <p class="ibooking-item_text">Buy 10 sessions for a lower price. Book whenever you want and for as long as you need. The pass stays valid for <b>1 year</b> . Easily track how many sessions you have left with our user dashboard. </p>
                </swiper-slide>
                 <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cancel-fill.svg" alt="">
                    <h3 class="ibooking-item_title"><span class="red-text">Free  </span>Cancelation </h3>
                    <p class="ibooking-item_text">You suddenly get called by the boss? He tells you you have to work tomorrow but you already have a session with Gab? Easily cancel your sessions for free if you do it <b>24 hours</b>  in advance!</p>
                </swiper-slide>
                  <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cancel-fill.svg" alt="cancel icon">
                    <h3 class="ibooking-item_title"><span class="red-text">Free  </span>Cancelation </h3>
                    <p class="ibooking-item_text">You suddenly get called by the boss? He tells you you have to work tomorrow but you already have a session with Gab? Easily cancel your sessions for free if you do it <b>24 hours</b>  in advance!</p>
                </swiper-slide>
                  <swiper-slide class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cash.svg" alt="cash icon">
                    <h3 class="ibooking-item_title"><span class="red-text">Cash  </span>Payement Possible </h3>
                    <p class="ibooking-item_text">When booking choose the cash option. This will skip the online payement. On the day of the session be sure to paye the coach <b>before</b> the session starts.</p>
                </swiper-slide>
                
           </swiper>
           <div class="ibooking-item-wrapper-mobile">
             <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/appointment.svg" alt="appointment icon">
                    <h3 class="ibooking-item_title">Book and Pay <span class="red-text">Online!</span></h3>
                    <p class="ibooking-item_text">Easily book and pay online! 5 minutes is all you need. We provide many payement methodes and even the possibility to pay cash. Book now!</p>
                </div>
                 <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/notification-fill.svg" alt="notification icon">
                    <h3 class="ibooking-item_title">E-mail Reminder </h3>
                    <p class="ibooking-item_text">Get an E-mail reminder <b>2 hours</b>  in advance. This way you will never miss a workout. Rather get a text message? No problem we got you covered!</p>
                </div>
                 <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/list.svg" alt="list icon">
                    <h3 class="ibooking-item_title">Multi-Session <span class="red-text">Pass </span></h3>
                    <p class="ibooking-item_text">Buy 10 sessions for a lower price. Book whenever you want and for as long as you need. The pass stays valid for <b>1 year</b> . Easily track how many sessions you have left with our user dashboard. </p>
                </div>
                 <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cancel-fill.svg" alt="">
                    <h3 class="ibooking-item_title"><span class="red-text">Free  </span>Cancelation </h3>
                    <p class="ibooking-item_text">You suddenly get called by the boss? He tells you you have to work tomorrow but you already have a session with Gab? Easily cancel your sessions for free if you do it <b>24 hours</b>  in advance!</p>
                </div>
                  <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cancel-fill.svg" alt="cancel icon">
                    <h3 class="ibooking-item_title"><span class="red-text">Free  </span>Cancelation </h3>
                    <p class="ibooking-item_text">You suddenly get called by the boss? He tells you you have to work tomorrow but you already have a session with Gab? Easily cancel your sessions for free if you do it <b>24 hours</b>  in advance!</p>
                </div>
                  <div class="ibooking-item">
                    <img class="ibooking-item_icon" src="../assets/icons/cash.svg" alt="cash icon">
                    <h3 class="ibooking-item_title"><span class="red-text">Cash  </span>Payement Possible </h3>
                    <p class="ibooking-item_text">When booking choose the cash option. This will skip the online payement. On the day of the session be sure to paye the coach <b>before</b> the session starts.</p>
                </div>
           </div>
      </div>
     
      <div class="ibooking-bottom">
          <div class="ibooking-bottom_inner">
          <a class="misc-item" href="#">Terms And Conditions</a>
          <a class="misc-item" href="#">Refund Policy</a>
          <a class="misc-item" href="#">Cookie Policy</a>
          <a class="misc-item" href="#">Privacy Policy</a>
          </div>
      </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'booking-info',
    components: {
    Swiper,
    SwiperSlide
  },
  data() {
      return {
        bookingOptions: {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          centeredSlides: false,
          speed: 7000,
          grabCursor: true,
          animating: true,
            
        // AutoPlay
            autoplay: {
              delay: 0
            }

        }
      }
    },
     directives: {
    swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.bookingSwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }

}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.ibooking-middle >.swiper-container{
    height: auto;
    margin: 0;
    padding-left: 5%;
    padding-right: 5%;
      @include breakpoint(tablet-md){
        padding: 50px 0px;

  }
}

.ibooking-middle > .swiper-button-next, .ibooking-middle > .swiper-button-prev{
  color: black;
  margin-top: 25%;
  --swiper-navigation-size: 20px;
  display: none;
  background-color: rgba(128, 128, 128, 0.075);
  padding: 5px 10px;
  border-radius: 5px;
}

.ibooking-middle > .swiper-container > .swiper-wrapper{
    margin-top: 0 !important;
    display: flex;
    align-items: center;
    -webkit-transition-timing-function:linear!important;
    -o-transition-timing-function:linear!important;
    transition-timing-function:linear!important;
    padding: 50px 0px;
}

.ibooking-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

}

.ibooking-top{
    display: flex;
    width: 100%;
    height: 40%;
    
    
  @include breakpoint(tablet-md){
    flex-direction: column;
        height: auto;
  }

  
}

.ibooking-header{
    width: 35%;
    color: white;
    background-color: #1E1E1E;
    padding-top: 20px;
    padding-left: 4vw;
      @include breakpoint(tablet-md){
        min-height: 300px;
        width: 100%;
        box-sizing: border-box;
  }
}

.ibooking-header_title{
    font-size: 4rem;
    margin: 3rem 0;
    @include breakpoint(tablet-md){
      font-size: 3rem;
    }


}



.ibooking-header_text{

    position: relative;
    font-size: 1.5rem;
    width: 80%;
    font-weight: 700;
    line-height: 150%;
    &:before{
        content: url('../assets/icons/decoration/grid-dots3.svg');
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(90%);

    }

     @include breakpoint(tablet-md){
       font-size: 1.3rem;

  }
}

.ibooking-pay{
    padding-top: 20px;
    padding-left: 4vw;
    position: relative;
    flex: 1;
    background-color: #EFEFEF;


      @include breakpoint(tablet-md){
         padding-bottom: 30px;
         padding-top: 0px;
  }
  

  
}

.ibooking-pay_title{
    margin: 3rem 0;
    font-size: 4rem;
    @include breakpoint(tablet-md){
      font-size: 3rem;
    }    
}

.ibooking-pay_list{
    width: 70%;
    
      @include breakpoint(tablet-md){
        width: 90%;
  }
  
}

.payement-icon{
    position: relative;
    width: 60px;
    margin-right: 10px;
    margin-bottom: 10px;

}

.cash-icon{
    width: auto;
}

.secure-payement{
    font-weight: 700;
    opacity: .8;
    position: absolute;
    bottom: 5px;
    display: flex;
    align-items: center;
    &::before{
        content: url('../assets/icons/payment/secured.svg');
        margin-right: 10px;
        opacity: .8;
    }
    @include breakpoint(phone){
      font-size: .9rem;

  }

}

.mollie{
    text-decoration: none;
    color: rgb(0, 144, 201);
}

.ibooking-middle{
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    min-height: 300px;
     @include breakpoint(tablet-md){
       padding: 20px 0px;
       min-height: auto;
     }
}


.ibooking-item{
    transition: box-shadow .2s ease;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgb(223, 223, 223);
    min-height: 300px;
    min-width: 300px;
    padding: 20px;
    background-color: white;
     &:hover{
         box-shadow: 0px 0px 50px rgb(177, 177, 177);
    }

    @include breakpoint(tablet-md){
      width: 90%;
      margin-bottom: 20px;
    }

    @include breakpoint(phone-xs){
      min-width: auto;
    }
    
}

.ibooking-item_icon{
    height: 50px;
    padding: 5px;
}

.ibooking-item_title{
    font-size: 2rem;

     @include breakpoint(phone){
    font-size: 1.7rem;
  }
}

.ibooking-item_text{
    line-height: 150%;
    width: 95%;
    font-size: 1.2rem;
}

.ibooking-item-wrapper{
   @include breakpoint(tablet-sm){
     display: none;
   }
  
}

.ibooking-item-wrapper-mobile{
  display: none;
  @include breakpoint(tablet-sm){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
}

.ibooking-bottom{

    width: 100%;
    display: flex;
    justify-content: center;

     @include breakpoint(tablet-md){

  }

}

.ibooking-bottom_inner{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.misc-item{
    transition: opacity .2s ease;
    text-decoration: none;
    padding: 10px 40px;
    margin-bottom: 20px;
    background-color: black;
    opacity: .4;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    margin: 0px 5px;
    margin-bottom: 10px;
    white-space: nowrap;
    &:hover{
        opacity: 1;
    }

     @include breakpoint(tablet-sm){
      width: 70%;
      opacity: 1;
     }
     


    
}
// Tooltip 

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  font-size: 1.5rem;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 0;

  /* Position the tooltip */
  position: absolute;
  top: -80%;
  left: 0;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

// Decoration

.ibooking-dots_1{
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0 , -30%);
    opacity: .7;
}

.ibooking-dots_2{
    z-index: -100;
    position: absolute;
    top: 0;
    right: 0;
    opacity: .2;

}

.bancontact-icon::after{
    content: "Bancontact";
    position: absolute;
    background-color: white;
    padding: 10px 20px;


}






</style>