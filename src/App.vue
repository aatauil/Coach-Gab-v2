<template> 
  <div id="app" class="main-container">
    <transition>
    <router-view class="router-view-container"></router-view>
    </transition>
  <Navbar v-if="!mobileView" />
  <MobileNav v-if="mobileView" />
  </div>
</template>

<script>
//de13451d70a85ba978b65c812e188b2e312ab4ee

import Navbar from "./components/NavBar.vue";
import MobileNav from "./components/MobileNav";


export default {
  name: 'MyIndex',
  components: {
    Navbar,
    MobileNav
  },

  data() {
    return {
      mobileView: true
    }
},
  methods: {
    handleView(){
      this.mobileView = (window.innerWidth <= 992 || window.innerHeight <= 700);
    }
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView)
  }

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
    @include breakpoint(tablet-md){
    width: 100vw;
    height: auto;
    flex: 1;
    min-height: calc(100vh - 55px);
  }
  
  

}

#app {

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-dark;

}



</style>
