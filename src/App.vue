<template> 
  <div id="app" class="main-container">
    <router-view class="router-view-container"></router-view>
    <nav class="nav-list" slot="pagination">
      <router-link class="nav-item nav-home" to="/">Home</router-link>
      <router-link class="nav-item nav-services" to="/Services">Services</router-link>
      <router-link class="nav-item nav-booking-info" to="/Booking-info">Booking Info</router-link>
      <router-link class="nav-item nav-about" to="/About">About</router-link>
      <router-link class="nav-item nav-contact" to="/Contact">Contact</router-link>
      <router-link class="nav-item nav-booking" to="/Booking">Booking</router-link>
    </nav> 
  </div>
</template>

<script>


export default {
  name: 'MyIndex',
  components: {

  },

}
</script>

<style lang="scss">



@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');
@import './scss/variables.scss';

html{
  font-size: 62.5%;
  max-width: 100%;
  max-height: 100%;
}

body{
  max-width: 100vw;
  max-height: 100vh;
}

.router-view-container{
  height: 100%;
}

.main-container{
  display: flex;
  flex-direction: column;
  height: 100vh;

}

#app {

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-dark;
}

.nav-list{
  justify-content: space-between;
  bottom: 0;
  width: 100vw;
  z-index: 100;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: $color-dark;
  list-style-type: none;

}

.nav-item{
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 5px;
  list-style-type: none;
  color: rgb(255, 255, 255);
  font-weight: 700;
  opacity: .5;

}

.active-link{
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  opacity: 1;
  
}

.nav-home{
  margin-left: 5%;
}

.nav-booking{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  height: 100%;
  width: 15%;
  background-color: $color-red;
  color: rgb(255, 255, 255);
}

// Nav icons

.nav-home::before{
  content: url('./assets/icons/home-icon-fill.svg');
  margin-right: 10px;
}

.nav-services::before{
  content: url('./assets/icons/grid-icon-fill.svg');
  margin-right: 10px;
}

.nav-about::before{
  content: url('./assets/icons/about-icon-fill.svg');
  margin-right: 10px;
}

.nav-contact::before{
  content: url('./assets/icons/contact-icon-fill.svg');
  margin-right: 10px;
}

.nav-booking-info::before{
  content: url('./assets/icons/booking-info-icon-fill.svg');
  margin-right: 10px;
}




</style>
