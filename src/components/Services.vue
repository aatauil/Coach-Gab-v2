<template>
  <section class="service-container">
    <h1 class="service-title">Services<span class="red-text">.</span></h1>
    <img class="grid-dots_1" src="../assets/icons/decoration/grid-dots1.svg" alt="grid dots">
    <img class="grid-dots_2" src="../assets/icons/decoration/grid-dots2.svg" alt="grid dots">
     <router-link class="next-button" to="/Booking-info">Booking info</router-link>
      <swiper ref="mySwiper" :options="swiperOptions">
        <!-- Slide 1 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">Home</span> Personal Training</h2>
            <p class="service-item_text">1 on 1 or small group training. Professional body transformation service at your place for you and your family with miniam equipment.</p>
          </div>
          <div class="service-item_price-list">
            <div class="price-list_item">
              <div class="price-list_time">60 min</div>
              <div class="price-list_price"> 70 Euro</div>
            </div>
             <div class="price-list_item">
              <div class="price-list_time">90 min</div>
              <div class="price-list_price"> 80 Euro</div>
            </div>
          </div>
          <!-- <h3 class="service-item_decoration">Home Personal Training</h3> -->
        </swiper-slide>
        <!-- Slide 2 -->
         <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">1 on 1</span> Personal Training</h2>
            <p class="service-item_text">Private coaching sessions following specific designed programs to meet your desired goals.</p>
          </div>
          <div class="service-item_price-list">
            <div class="price-list_item">
              <div class="price-list_time">60 min</div>
              <div class="price-list_price"> 70 Euro</div>
            </div>
             <div class="price-list_item">
              <div class="price-list_time">90 min</div>
              <div class="price-list_price"> 80 Euro</div>
            </div>
          </div>
          <!-- <h3 class="service-item_decoration">Home Personal Training</h3> -->
        </swiper-slide>
        <!-- Slide 3 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">Boxing</span> Class</h2>
            <p class="service-item_text">1 on 1 boxing training. A nice way though not always easy to get rid of the stress related chemicals accumulated in the body. Adding diversity to your workout and, in addition to an optimized nutrition and recovery plan, playing an important part in the body tranformation quest.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_time">30 min</div>
              <div class="price-list_price"> 45 Euro</div>
            </div>
             <div class="price-list_item">
              <div class="price-list_time">60 min</div>
              <div class="price-list_price"> 60 Euro</div>
            </div>
             <div class="price-list_item">
              <div class="price-list_time">69 min</div>
              <div class="price-list_price"> 85 Euro</div>
            </div>
          </div>
           <!-- <h3 class="service-item_decoration">Boxing Class</h3> -->
        </swiper-slide>
        <!-- Slide 4 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">Home</span> Boxing Class</h2>
            <p class="service-item_text">1 on 1 or small group boxing training. Save precious time and have a professional body transformation service at your place for you and your family.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_time">60 min</div>
              <div class="price-list_price"> 70 Euro</div>
            </div>
            <div class="price-list_item">
              <div class="price-list_time">90 min</div>
              <div class="price-list_price"> 90 Euro</div>
            </div>
          </div>
        </swiper-slide>
         <!-- Slide 5 -->
         <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">Consultation</span> + Training Program</h2>
            <p class="service-item_text">Consultation + 6 week training program tailored to your goals.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_price"> 120 Euro</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="navigation-container">
          
        </div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'services',
  components: {
    Swiper,
    SwiperSlide
  },
 data() {
      return {
        swiperOptions: {
          effect: 'coverflow',
          centeredSlides: true,
          slidesPerView: 'auto',
          slideToClickedSlide: true,
          initialSlide: 1,
          coverflowEffect: {
            slideShadows: true,
            rotate: 0,
            stretch: -30,
            depth: 100,
            modifier: 3,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },



          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: "true",
                renderBullet: function (index, className) {
                  let menu = ['1', '2', '3', '4', '5']
                return `<span class="${className} bullet-${index}"> ${menu[index]} </span>`;
            },
          },
          // Some Swiper option/callback...
        }
      }
    },
      directives: {
    swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
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

.service-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 100%;
  background-color: rgb(238, 238, 238);
  position: relative;
  min-height: 600px;

}

//swiper-navigation

.swiper-button-next, .swiper-button-prev{
  display: none;
  color: black;
  @include breakpoint(tablet-md){
  display: block;
}
}


.service-title{
  font-size: 6rem;
  width: 90%;
  padding-left: 10%;

    @include breakpoint(height-sm){
  margin-bottom: 0;
  }
}

.swiper-container{
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1;
  width: 100%;
  overflow: hidden;
  min-height: 500px;

  
}

.swiper-wrapper{
  max-width: 100vw;
  margin: auto;
  margin-top: 50px;

}


.swiper-container-3d .swiper-slide-shadow-left, 
.swiper-container-3d .swiper-slide-shadow-right{
  background-image: linear-gradient(to left, rgba(0, 0, 0, .15), rgba(0, 0, 0, 0.15))
}

.service-item{

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 65%;
  padding: 5px;
  width: 320px;
  max-width: 350px;
  box-shadow: 0px 0px 30px rgba(128, 128, 128, 0.103);
  cursor: pointer;

      @include breakpoint(height-sm){
      min-height: 400px
      }

  
}

.swiper-slide-active{
  cursor:default;
}


.service-item_decoration{
  position: absolute;
  writing-mode: vertical-rl;
  margin: 0;
  font-size: 2rem;
  top: 50%;
  opacity: .05;
  transform: translateY(-50%);

}


.service-item_title{
  padding: 20px 15px;
  font-size: 2rem;
    @include breakpoint(tablet-md){
  font-size: 16px;
}
}

.service-item_text{
  font-size: 1.3rem;
  padding-left: 15px;
  width: 90%;
  line-height: 150%;
      @include breakpoint(tablet-md){
  font-size: 12px;
}
}

.service-item_price-list{
  display: flex;
  flex-direction: column;
  align-items: center;

}

.price-list_item{
  display: flex;
  width: 90%;
  justify-content: space-between;
  background-color: #EEEEEE;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 1.2rem;
  &:last-child{
    margin-bottom: 20px;
  }

  @include breakpoint(tablet-md){
    font-size: 12px;
  }
}

.price-list_time, .price-list_price{
  padding: 15px;

}

.price-list_price{
  font-weight: 700;
}



.red-text{
  color: $color-red;
}

//PAGINATION 
.swiper-pagination{
  margin-bottom: 50px;
   &:before{
    content: "";
    top: 60%;
    left: 10vw;
    position: absolute;
    width: 20vw;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.096);
  }

    &:after{
    content: "";
    top: 60%;
    right: 10vw;
    position: absolute;
    width: 20vw;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.096);
  }

      @include breakpoint(height-sm){
      display: none;
      }
   
}
.swiper-pagination-bullet{
  position: relative;
  opacity: .8;
  color: black;
  width: 20px;
  height: 100%;
  font-size: 2rem;
  font-weight: 700;
  background: none;


}


.swiper-pagination-bullet-active{
  position: relative;
  font-size: 4rem;
  line-height: 100%;
  transform: translateY(-10px);
  text-align: center;
  transition: all .2s ease;
  &::after{
    position: absolute;
    bottom: 0;
    transform: translateY(90%);
    left: 0;
    content: "";
    width: 110%;
    height: 10px;
    border-radius: 2px;
    background-color: $color-red;
  }
}

// Decoration

.grid-dots_1{
  position: absolute;
  left: 0;
  top: 10%;
  width: 100px;
}

.grid-dots_2{
  position: absolute;
  right: 10px;
  bottom: 8%;
  width: 100px;
}

// next button




</style>