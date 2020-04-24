<template>
    <div class="home-wrapper">
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
            <button class="next-button">Services</button>
            <p class="quote">"I believe in me, I believe in you. I have faith in what I do. I always do my best!"</p>
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
}
.booking-btn{
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    justify-content: center;
    width: 200px;
    margin-left: 10%;
    text-align:left;
    color: white;
    font-weight: 700;
    font-size: 1.8rem;
}

.booking-btn::after{
    content: "";
    margin-left: 20px;
    background-color: white;
    width: 40px;
    height: 40px;
    transform:translateY(-10%);
    transform:rotate(180deg);
    background-image: url("../assets/icons/arrow-left.svg");
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
    display: flex;
}


.next-button{
    position: absolute;
    display: flex;
    right: 0px;
    background-color: $color-dark;
    align-items: center;
    border: none;
    color: white;
    padding: 20px 10%;
    font-size: 1.6rem;
    font-weight: 700;
    z-index: 100;
}

.next-button::after{
    content: "";
    margin-left: 10px;
    width: 20px;
    height: 20px;
    transform:translateY(-10%);
    transform:rotate(180deg);
    background-image: url("../assets/icons/arrow-left.svg");
    filter: invert(100);
    background-size: 15px 15px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
}



.quote{
    margin: 5px;
    margin-top: 15%;
    font-size: 4rem;
    font-weight: 700;
    margin-left: 10%;
    opacity: .1;
    text-align: right;
}

.coach-info{
    display: flex;
    flex-direction: column;
    width: 50%;
    position: absolute;
    right: 5%;
    bottom: 5%;
}

.info-item{
    display: flex;
    background-color: rgba(0, 0, 0, 0.041);
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

</style>