<template>
  <nav class="mobile-nav" slot="pagination">
      <div class="nav-collapse" :class="{navOpen:navOpen}"> 
      <router-link class="mobile-nav-item nav-home" to="/">Home</router-link>
      <router-link class="mobile-nav-item nav-services" to="/Services">Services</router-link>
      <router-link class="mobile-nav-item nav-booking-info" to="/Booking-info">Booking Info</router-link>
      <!-- <router-link class="nav-item nav-about" to="/About">About</router-link> -->
      <router-link class="mobile-nav-item nav-contact" to="/Contact">Contact</router-link>
      </div>
    <div class="mobile-nav-bar">
      <a href="#" class="mobile-nav-booking">Booking</a>
      <button class="mobile-nav-btn" @click="navOpen = !navOpen"><i class="gg-menu-right"></i>Menu</button>
      </div>
  
     
    </nav> 
</template>

<script>
export default {
  name: "mobileNav",

  data() {
    return {
      navOpen: false
    }
  },

  watch: {
    '$route' () {
      this.navOpen = false
    }

  }
}
</script>

<style lang="scss">

@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.mobile-nav{
  z-index: 10;
  width: 100%;
}

.mobile-nav-bar{

  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: $color-dark;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  height: 55px;
}

.mobile-nav-booking{
  text-decoration: none;
  color: white;
  background-color: $color-red;
  padding: 10px 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.mobile-nav-btn{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.075);
  color: white;
  border: none;
  padding: 10px;
  width: 10vw;
  font-weight: 700;
  min-width: 100px;
  border-radius: 5px;
}

.nav-collapse{
  transition: all .5s ease;
  position: absolute;
  transform: scale(0);
  transform-origin: 100% 100%;
  height: 100vh;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
  justify-content: center;
}

.mobile-nav-item{
  color: white;
  font-size: 4rem;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5vh;
  font-weight: 700;
}

.navOpen{
  height: 100vh;
  width: 100%;
  background-color: $color-dark;
  z-index: -1;
  transform: scale(1);

}


// Nav icons

.nav-home::before{
  content: url('../assets/icons/navigation/home-icon-fill.svg');
  margin-right: 10px;
}

.nav-services::before{
  content: url('../assets/icons/navigation/grid-icon-fill.svg');
  margin-right: 10px;
}

.nav-about::before{
  content: url('../assets/icons/navigation/about-icon-fill.svg');
  margin-right: 10px;
}

.nav-contact::before{
  content: url('../assets/icons/navigation/contact-icon-fill.svg');
  margin-right: 10px;
}

.nav-booking-info::before{
  content: url('../assets/icons/navigation/booking-info-icon-fill.svg');
  margin-right: 10px;
}



// css.gg menu icon

.gg-menu-right {
    transform: scale(var(--ggs,1))
}
.gg-menu-right,
.gg-menu-right::after,
.gg-menu-right::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background: white
}
.gg-menu-right::after,
.gg-menu-right::before {
    content: "";
    position: absolute;
    top: -6px;
    right: 0;
    width: 10px
}
.gg-menu-right::after {
    top: 6px;
    width: 14px
}





</style>