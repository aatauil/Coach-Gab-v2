<template> 
  <div id="app" class="main-container">
    <router-view class="router-view-container"></router-view>
   <Navbar/>
  </div>
</template>

<script>
//de13451d70a85ba978b65c812e188b2e312ab4ee

import Navbar from "./components/MobileNav"

export default {
  name: 'MyIndex',
  components: {
    Navbar
  },

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');
@import './scss/mixins.scss';
@import './scss/variables.scss';

html{
  font-size: 62.5%;
  width: 100%;
  height: 100%;
  


  @include breakpoint(tablet-md){
    font-size: 55%;
  }
  
    @include breakpoint(phone){
    font-size: 35%;
  }
}

body{
  max-width: 100vw;
  max-height: 100vh;
}

.router-view-container{
  height: 100%;
  flex: 1;
}

.main-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
    @include breakpoint(tablet-sm){
    width: auto;
  }
  
  

}

#app {

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-dark;

}



</style>
