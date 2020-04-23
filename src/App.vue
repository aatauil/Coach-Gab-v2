<template> 
  <div id="app" class="main-container">
    <router-view class="router-view-container"></router-view>
    <nav class="nav-list" slot="pagination">
      <router-link class="nav-item nav-home" to="/">Home</router-link>
      <router-link class="nav-item" to="/Services">Services</router-link>
      <router-link class="nav-item" to="/About">About</router-link>
      <router-link class="nav-item" to="/Gallery">Gallery</router-link>
      <router-link class="nav-item" to="/Contact">Contact</router-link>
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

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');

html{
  font-size: 62,5%;
  overflow: hidden;
}

.router-view-container{
  height: 100%;
}

.main-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
}

.nav-list{
  justify-content: space-between;
  bottom: 0;
  width: 100vw;
  z-index: 100;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #111;
  list-style-type: none;


}


.nav-item{
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  list-style-type: none;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.active-link{
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
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
  background-color: #B80000;
  color: rgb(255, 255, 255);
}


</style>
