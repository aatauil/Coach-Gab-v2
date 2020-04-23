<template>
  <section class="service-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <!-- Slide 1 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">1 on 1</span> Personal Training</h2>
            <p class="service-item_text">Private coaching sessions following specific designed programs to meet your desired goals.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_time">30 min</div>
              <div class="price-list_price"> 45 Euro</div>
            </div>
          </div>
        </swiper-slide>
        <!-- Slide 2 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">1 on 1</span> Personal Training</h2>
            <p class="service-item_text">Private coaching sessions following specific designed programs to meet your desired goals.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_time">30 min</div>
              <div class="price-list_price"> 45 Euro</div>
            </div>
          </div>
        </swiper-slide>
        <!-- Slide 3 -->
        <swiper-slide class="service-item">
          <div class="service-item_info">
            <h2 class="service-item_title"><span class="red-text">1 on 1</span> Personal Training</h2>
            <p class="service-item_text">Private coaching sessions following specific designed programs to meet your desired goals.</p>
          </div>
          <div class="service-item_price-list price-list">
            <div class="price-list_item">
              <div class="price-list_time">30 min</div>
              <div class="price-list_price"> 45 Euro</div>
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
          slidesPerView: 3,
          spaceBetween: 30,
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
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style>

.service-container{
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 100%;
  background-color: #F9F9F9;
}

.service-item{
  background-color: white;
  height: 90%;
}

</style>