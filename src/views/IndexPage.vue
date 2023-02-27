<template>
    <div class="outer_panel">
        <div class="header_panel">
            <header-bar-component></header-bar-component>
        </div>
        <div class="main_panel">
            <spite-animate-component></spite-animate-component>
        </div>
    </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import HeaderBarComponent from '@/components/HeaderBarComponent.vue'
import SpiteAnimateComponent from '@/components/SpiteAnimateComponent.vue'

export default {
    name: 'IndexPage',
    components: {
        HeaderBarComponent,
        SpiteAnimateComponent
    }
}
</script>

<style lang="less" scoped>
.outer_panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .header_panel{
        height: 80px;
        width: 100%;
    }
    .main_panel {
        width: 100%;
        flex: 1;
    }
}
</style>