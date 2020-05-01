<template>
    <div class="home-wrapper">
         <img class="home-dots_1" src="../assets/icons/decoration/grid-dots1.svg" alt="dots">
         <img class="home-dots_2" src="../assets/icons/decoration/grid-dots2.svg" alt="dots">
        <router-link class="next-button" to="/Services">Services</router-link>
        <div class="copyright">©Copyright 2020 • Gabriel</div>
        <div class="container container-1">
            <p class="sub-title">National Academy Sports Medicine - Certified Personal Trainer!</p>
            <h1 class="main-title" >PERSONAL<br><span class="color-black">Fitness </span>Coach<span class="color-black">.</span></h1>
            <button class="booking-btn">Book now!</button>
           
        </div>
        <div class="hero-img-container">
            <img class="hero-img" src="../assets/gab-hero-clip.png" alt="Coach ">
        </div>
        <div class="container container-2">

            <p class="quote"><span class="quote-tag">"</span>I believe in me, I believe in you. I have faith in what I do. I always do my best!<span class="quote-tag">"</span></p>
            <div class="coach-info">
                <div class="info-item info-name">
                    <div class="info-param">Name</div>
                    <div class="info-element">Gabriel</div>
                </div>
                <div class="info-item info-age">
                    <div class="info-param">age</div>
                    <div class="info-element">35</div>
                </div>
                <div class="info-item info-experience">
                    <div class="info-param">Experience</div>
                    <div class="info-element">7+ Years</div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'FirstSlide'

}
</script>

<style lang="scss">

@import '../scss/variables.scss';
@import '../scss/mixins.scss';

.copyright{
    position: absolute;
    left: 0;
    z-index: 100;
    bottom: 30px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: rgba(255, 255, 255, 0.445);
    font-size: 1.6rem;
}

.home-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: white;
    position: relative;
}

.container{
    width: 50%;
    height: 100%;
    @include breakpoint(tablet-md){
    width: 100%;
  }
}

.container-1{
    position: relative;
    background-color: $color-red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

.main-title{
    width: auto;
    text-align: left;
    color: white;
    font-size: 7.5rem;
    margin-left: 10%;
    line-height: 90%;
    z-index: 1;
}

.color-black{
    color: $color-dark;
}

.sub-title{
    text-align: center;
    position: absolute;
    top: 0;
    color: rgba(255, 255, 255, 0.459);
    font-size: 1.6rem;
    width: 100%;
}

.column{
    width: 100%;
}

.container-2{
    position: relative;
    @include breakpoint(tablet-md){
    display: none;
  }
    
}
.booking-btn{
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    justify-content: center;
    width: auto;
    margin-left: 10%;
    text-align:left;
    color: white;
    font-weight: 700;
    font-size: 1.8rem;
    z-index: 1;
}

.booking-btn::after{
    content: "";
    margin-left: 20px;
    background-color: white;
    width: 40px;
    height: 40px;
    transform:translateY(-10%);
    transform:rotate(180deg);
    background-image: url("../assets/icons/decoration/arrow-left.svg");
    background-size: 12px 12px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;

}


.hero-img-container{
    position: absolute;
    transform: translateY(10px);
    bottom: 0px;
    margin-left: 60px;
    z-index: 1000;
    @include breakpoint(tablet-md){
    right: 0;
    z-index: 1;
    }

      @include breakpoint(phone-xs){
    display: none;
    }

  
}

.hero-img{
    max-width: 100%;
    width: 100%;
    height: auto;
    @include breakpoint(tablet-md){
    width: 40vh;
  }
}


.next-button{
    position: absolute;
    display: flex;
    right: 0px;
    top: 0;
    background-color: $color-dark;
    align-items: center;
    border: none;
    color: white;
    padding: 20px 5%;
    font-size: 1.6rem;
    font-weight: 700;
    z-index: 100;
    opacity: .3;
    transition: opacity .2s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        opacity: 1;
    }
    @include breakpoint(tablet-sm){
    opacity: 1;
    padding: 10px 5%;
  }
}

.next-button::after{
    content: "";
    margin-left: 10px;
    width: 20px;
    height: 20px;
    transform:translateY(-10%);
    transform:rotate(180deg);
    background-image: url("../assets/icons/decoration/arrow-left.svg");
    filter: invert(100);
    background-size: 15px 15px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
}



.quote{
    transition: all 2s ease;
    line-height: 150%;
    width: 90%;
    font-size: 4rem;
    font-weight: 700;
    margin: auto;
    margin-top: 20rem;
    text-align: center;
    color: rgba(128, 128, 128, 0.137);
    // &> span{
    //     color: $color-red;
    //     transform: all 1s ease;
    //     opacity: .2;
    // }
    &:hover {
        color: white;
       text-shadow:
       0px 0px 0 rgb(221,221,221),
       .1rem .1rem 0 rgb(204,204,204),
       .2rem .2rem 0 rgb(188,188,188),
       .3rem .3rem 0 rgb(172,172,172),
       .4rem .4rem 0 rgb(156,156,156),
       .5rem .5rem 0 rgb(139,139,139),
       .6rem .6rem 0 rgb(123,123,123),
       .7rem .7rem 0 rgb(107,107,107),
       .8rem .8rem 7rem rgba(0,0,0,1),
       .8rem .8rem 1rem rgba(0,0,0,0.5),
       0rem 0px .7rem rgba(0,0,0,.2);

    //    &>span{
    //        color: $color-red;
    //        opacity: 1;
    //    }
    }

}


.coach-info{
    display: flex;
    flex-direction: column;
    width: 50%;
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 10000;
}

.info-item{
    display: flex;
    background-color: #EDEDED;
    padding: 20px 30px;
    margin: 5px;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
}

.info-param{
    font-size: 1.5rem;
    text-align: left;
    font-weight: 700;
    color: rgba(17, 17, 17, 0.507);
}

.info-element{
    font-size: 1.5rem;
    color: $color-dark;
    font-weight: 700;

}

// Decoration 

.home-dots_1{
    z-index: 1;
    position: absolute;
    top: 30px;
    left: 0;

    @include breakpoint(tablet-sm){
    height: 50%;
  }

}

.home-dots_2{
    z-index: 0;
    position: absolute;
    bottom: 0px;
    right: 10px;

}

</style>