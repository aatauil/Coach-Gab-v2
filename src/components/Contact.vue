<template>
    <section class="contact-container">
        <h1 class="contact-title">Contact<span class="red-text">.</span></h1>
        <img class="grid-dots_1" src="../assets/icons/decoration/grid-dots1.svg" alt="grid dots">
        <img class="grid-dots_2" src="../assets/icons/decoration/grid-dots2.svg" alt="grid dots">
         <a href="#" class="next-button" >Booking</a>
        <form class="contact-form" name="contact" netlify netlify-honeypot="bot-field">
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
             </p>
            <div class="contact-form_left">
                <p class="form-name form-item">
                    <label class="form-label" for="name">Name<span class="red-text">*</span> </label>
                    <input class="form-input" type="text" name="name" id="name" required >
                </p>
                <p class="form-email form-item">
                    <label class="form-label" for="email">Email<span class="red-text">*</span></label>
                    <input class="form-input" type="email" name="email" id="email" required >
                </p>
                <p class="form-tel form-item">
                    <label class="form-label" for="tel">Tel.</label>
                    <input class="form-input" type="tel" name="tel" id="tel">
                </p>
                <p class="form-message form-item">
                    <label class="form-label" for="message">Message<span class="red-text">*</span></label>
                    <textarea class="form-textarea" name="message" id="message" required ></textarea>
                </p>
                <p class="form-required"><span class="red-text">*</span>These fields are required</p>
            </div>
            <div class="contact-form_right">
                <div class="contact-urgent">
                    <p class="contact-urgent_text">It generally takes under 24 hours for coach gab to answer to the e-mail. Is it urgent? You can always call coach Gab <u>during bussiness hours</u>.</p>
                    <p class="contact-urgent_number">+32 4 83 70 19 90</p>
                    <div class="contact-hours">
                        <div class="contact-hours_item">
                            <p class="contact-day">Monday-Friday:</p>
                            <p class="contact-time">9h - 17h</p>
                        </div>
                        <div class="contact-hours_item">
                            <p class="contact-day">Monday-Friday:</p>
                            <p class="contact-time">9h - 17h</p>
                        </div>
                    </div>
                </div>
                <div class="form-privacy">
                    <div class="form-checkbox" v-bind:class="{ checked:checkboxChecked}" ></div>
                    <input class="checkbox" type="checkbox" name="privacy-checkbox" id="privacy-checkbox" required >
                    <label class="privacy-label" @click='checkboxChecked = !checkboxChecked'  for="privacy-checkbox">I have read and agreed to the privacy policy of coach gab<span class="red-text">*</span></label>
                </div>
                <input class="form-submit" type="submit" value="Send">
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: "contact",

    data() {
        return {
            checkboxChecked: false
        }
    },

}
</script>

<style lang="scss">

@import "../scss/variables.scss";
@import "../scss/mixins.scss";

.hidden{
    display: none;
}


.contact-container{
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;

        @include breakpoint(tablet-md){
   padding-bottom: 20vh;
   margin-bottom: 55px;
  }

}

textarea {
  resize: none;
  width: 100%;
}


.contact-title{
  font-size: 6rem;
  width: 90%;
  padding-left: 10%;
  margin-bottom: 0px;
}

.contact-form{
    display: flex;
    width: 90%;
    margin: auto;
    max-width: 1300px;
        @include breakpoint(tablet-md){
    flex-direction: column;
    margin-bottom: 55px;
  }


}

.contact-form_left{
    width: 50%;
    @include breakpoint(tablet-md){
    width: 100%;
    margin-bottom: 2vh;
  }
}


.form-item{
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 700;
    width: 90%;
        @include breakpoint(tablet-md){
    width: 100%;
  }
}



.form-label{
    margin-bottom: 10px;
}

.form-input{
    background-color: #E7E7E7;
    border: none;
    border-radius: 10px;
    height: 5rem;
    padding-left: 10px;
}

.form-textarea{
     background-color: #E7E7E7;
    border: none;
    padding-top: 20px;
    border-radius: 10px;
    padding-left: 10px;
    height: 10rem;
        @include breakpoint(tablet-md){
    padding-left: 0;
  }
}

.form-required{
    font-size: 1.2rem;
    font-weight: 700;
    opacity: .5;
}


.contact-form_right{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
        @include breakpoint(tablet-md){
    width: 100%;

  }
}

.contact-urgent{
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: $color-dark;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 700;
            @include breakpoint(tablet-md){
    margin-top: 2vh;
    margin-bottom: 2vh;
    order: 3;
  }
}

.contact-urgent_text{
    font-size: 1.5rem;
}


.contact-urgent_number{
    font-size: 1.5rem;
    text-align: center;
    color: red
}

.contact-hours{
    background-color: rgba(255, 255, 255, 0.103);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
}

.contact-hours_item{
    font-size: 1.2rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.contact-hours_item:first-child{
  border-bottom: 1px solid rgba(128, 128, 128, 0.466);
}

.form-privacy{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @include breakpoint(tablet-md){
    margin-bottom: 2vh;
  }
}

// checkbox

.checkbox{
    position: relative;
    opacity: 0;
}

.form-checkbox{
    position: absolute;
    left: 10px;
    height: 3rem;
    width: 3rem;
    border-radius: 5px;
    border: 3px solid $color-red;
}

.privacy-checkbox{
    background-color: white;
}

.checked{
    background-color: $color-red;
}

.privacy-label{
    z-index: 10;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    padding: 1rem 0 1rem 4rem;
}

.form-submit{
    width: 100%;
    padding: 20px;
    background-color: $color-red;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 2rem;
    font-weight: 700;

}

// Decoration

.grid-dots_1{
  position: absolute;
  left: 0;
  top: 10%;
  width: 100px;
          @include breakpoint(tablet-md){
    z-index: -1;
  }
}

.grid-dots_2{
  position: absolute;
  right: 10px;
  bottom: 8%;
  width: 100px;
    @include breakpoint(tablet-md){
    z-index: -1;
  }
}



</style>