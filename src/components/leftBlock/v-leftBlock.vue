<template>
    <div class="leftBlockMen">

            <leftMenu />
            <vPolzunok />

    </div>
</template>

<script>
import leftMenu from "../leftBlock/v-menuLeft"
import vPolzunok from "../leftBlock/v-polzunok"

export default {
    name : "leftBlock",
    components : {
        leftMenu,
        vPolzunok
    }
}
</script>
<style lang="scss">

</style>