<template>
    <div class="outer_panel">
        <div class="show_box"></div>
    </div>
</template>

<script>
import spiteImg from '@/assets/img/spite_img.png'
export default {
    name: 'SpiteAnimateComponent',
    data() {
        return {
            spiteImg:spiteImg
        }
    },

}
</script>

<style lang="less" scoped>
.outer_panel {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .show_box {
        height: 271px;
        width: 132px;
        background-image: url('@/assets/img/spite_img.png');
        animation: walk 0.8s steps(4) infinite;
    }

    @keyframes walk {
        from {
            background-position: 0 0;
        }

        to {
            background-position: -528px 0;
        }
    }

}
</style>