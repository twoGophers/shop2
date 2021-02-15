<template>
    <div class="v-polzunok">
        <div class="range-slider">

            <input 
                type="range" 
                min="0" 
                max="1000" 
                step="1" 
                name="" 
                id=""
                value="minPrice"
                v-model="minPrice"
                @keyup="setRangeSlider"
                
            >
            <input
                type="range" 
                min="0"
                max="1000" 
                step="1" 
                name="" 
                id=""
                value="maxPrice"
                v-model="maxPrice"
                @keyup="setRangeSlider"
                
             >
        </div>
        <div class="range-value">
            <p>Min : {{minPrice}}</p>
            <p>Max : {{maxPrice}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'v-polzunok',
    data () {
        return {
            minPrice: 0,
            maxPrice: 1000,
        }
    },
    methods : {
        setRangeSlider() {
            
            if(this.minPrice > this.maxPrice) {
                let temp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = temp;
            }
        },
        
        ...mapActions ([
            'GET_MIN_SLIDER',
            'GET_MAX_SLIDER'
            
        ]),
    },
    computed : {
        ...mapGetters ([
            'MIN_SLIDER',
            'MAX_SLIDER'
        ])
    }

}
</script>

<style lang="scss">
.v-polzunok {
    display: flex;
    margin-top: 15%;
    flex-direction: column;
    box-shadow: 0 0 8px 0 rgb(252, 200, 239);
    .range-slider {
        
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
        }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
        
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -5px;
    }
    .range-value {
        margin: 10%;
        
    }
}
</style>