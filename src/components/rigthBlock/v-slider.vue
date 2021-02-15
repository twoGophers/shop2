<template>
    <div class="v-slider">
        <div class="slider-carousel">
            <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
            >
                <b-carousel-slide
                caption="Glam Angel"
                :img-src="require('../../images/victoriaS/GlamAngel.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                caption="Magic Shine"
                :img-src="require('../../images/victoriaS/MagicShine.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                caption="Night Angel"
                :img-src="require('../../images/victoriaS/NightAngel.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                caption="Secret Dreamer"
                :img-src="require('../../images/victoriaS/SecretDreamer.jpg')"
                ></b-carousel-slide>
            </b-carousel>
        </div>    
    </div>
</template>

<script>
export default {
    name : "v-slider"
}
</script>

<style lang="scss">
.v-slider {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: -1;
    .slider-carousel {
        width: 70%;
        border-radius: 1%;
        display: flex;
        justify-content: center;
        box-shadow: 0 0 10px 0 rgb(252, 200, 239);
        .carousel-fade {
            width: 50%;
        }

    }
}
</style>