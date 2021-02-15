<template>
    <div class="v-main">
        
        <div class="leftBlock">
            <leftBlock />
        </div>
        <div class="rightBlock">
            <rightBlock />
        </div>

    </div>
</template>

<script>
import leftBlock from "../leftBlock/v-leftBlock"
import rightBlock from "../rigthBlock/v-rightBlock"

export default {
    name: "v-main",
    components : {
        leftBlock,
        rightBlock
    }
}
</script>

<style lang="scss">
.v-main {
    display: flex;
    flex-direction: row;
    width: 100%;
    .leftBlock {
        width: 15%;
    }
    .rightBlock {
        width: 85%;
        
    }
}
</style>