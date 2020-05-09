<template>
  <section class="error-container">
        <img class="grid-dots_1" src="../assets/icons/decoration/grid-dots1.svg" alt="grid dots">
        <img class="grid-dots_2" src="../assets/icons/decoration/grid-dots2.svg" alt="grid dots">
        <div class="error-decoration">404</div>
         <kinesis-container class="error_kinesis-container">
              <kinesis-element class="error_kinesis-element" :strength="20">
                <h1 class="error-title">404</h1>
                <p class="error-text">Sorry the page that you are looking for has not been found :(</p>
              </kinesis-element>
              <kinesis-element :strength="0">
                  <a class="error-button" href="/">Back to Home Page</a>
              </kinesis-element>    
          </kinesis-container>

  </section>
</template>

<script>
import { KinesisContainer, KinesisElement} from "vue-kinesis";
export default {
    name: "404",
    components:{
        KinesisContainer,
        KinesisElement
    }

}
</script>

<style lang="scss">

@import "../scss/variables.scss";
@import "../scss/mixins.scss";

.error-container{
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    overflow: hidden;
    display: flex;
    align-items: center;


    & > .grid-dots_1{
        position: absolute;
        top: 0;
    }

     & > .grid-dots_2{
        position: absolute;
        right: 10px;
        bottom: 70px;

    }

}


.error-title{
    font-size: 10rem;
    margin: 0;
    text-align: center;
}

.error-text{
    font-size: 2rem;
    text-align: center;
    @include breakpoint(tablet-sm){
        padding: 0px 30px;
    }
}

.error_kinesis-container{
    width: 100%;
    height: 100%;
        display: flex;
    align-items: center;
    justify-content: center;
        flex-direction: column;
}

.error_kinesis-element{
    padding-bottom: 5%;
     @include breakpoint(phone){
        padding-bottom: 10%;
    }
}

.error-button{
    text-decoration: none;
    padding: 20px 50px;
    background-color: $color-red;
    color: white;
    font-weight: 700;
    font-size: 1.6rem;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover{
        font-size: 1.9rem;
        box-shadow: 0px 0px 60px rgb(119, 119, 119);
    }
    
}

.error-decoration{
    position: absolute;
    font-size: 50rem;
    font-weight: 700;
    opacity: .1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @include breakpoint(tablet-md){
        font-size: 30rem;
    }
    @include breakpoint(tablet-sm){
        font-size: 20rem;
    }
    @include breakpoint(phone){
        display: none;
    }

}

</style>