<template>
  <section class="service-container">
    <h1 class="service-title">Services<span class="red-text">.</span></h1>
      <swiper ref="mySwiper" :options="swiperOptions">
        <!-- Slide 1 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">Home</span> Personal Training</h2>
            <p class="service-item_text">1 on 1 or small group training. Professionalbody transformation service at your place for you and your family with miniam equipment.</p>
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
            <h2 class="service-item_title"><span class="red-text">Home</span> Personal Training</h2>
            <p class="service-item_text">1 on 1 or small group training. Professionalbody transformation service at your place for you and your family with miniam equipment.</p>
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
            <p class="service-item_text">1 on 1 or small group boxing training. Save precious time and have a professional body transformation service at your place for you and your family.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_price"> 120 Euro</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
          grabCursor: true,
          spaceBetween: 30,
          slidesPerView: '3',
          centeredSlides: true,
          coverflowEffect: {
            slideShadows: false,
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
          },

          pagination: {
            el: '.swiper-pagination'
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

.service-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 100%;
  background-color: #F9F9F9;


}


.service-title{
  font-size: 6rem;
}

.swiper-container{
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1;
  width: 100%;
  overflow: hidden;
}

.swiper-wrapper{
  max-width: 100vw;
  margin: auto;

}

.service-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 65%;
  padding: 5px;
  width: 300px;
  max-width: 350px;
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
}

.service-item_text{
  font-size: 1.3rem;
  padding-top: 15px;
  padding-left: 15px;
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

</style>