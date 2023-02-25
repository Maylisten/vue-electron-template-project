<template>
    <div class="header_bar_panel">
        <!-- <div class="drag_panel"></div> -->
        <div class="title_panel">Electron-Vue模板应用</div>
        <div class="menu_panel">
            <i class="icon iconfont icon-hide" @click="handleClick('hide')"></i>
            <i class="icon iconfont icon-zoom-out"></i>
            <i class="icon iconfont icon-close" @click="handleClick('close')"></i>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(tag) {
            switch (tag) {
                case 'close':
                   
                    window.ElectronAPI.hideWindow()
                    break
                case 'hide':
                    window.ElectronAPI.minimizeWindow()
                    break
                //放大
                case 'zoom-in':

                    break
                // 缩小
                case 'zoom-out':
                    break
                default:
                    return
            }
        }
    },

    computed: {
        winSizeStatus() {
            return this.data 
        }
    },
}
</script>

<style lang="less" scoped>
    .header_bar_panel {
        height: 100%;
        width: 100%;
        position: relative;
        background-color: gray;
        -webkit-app-region: drag;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        // .drag_panel{
        //     width: 100%;
        //     height: 100%;
        //     position: absolute;
        //     left: 0;
        //     right: 0;
        //     -webkit-app-region: drag;
        // }

        .title_panel {
            color: white;
            font-size: 20px;
            font-weight: 700;
            padding: 0 20px;
        }

        .menu_panel {
            height: auto;
            width: auto;
            padding: 0 10px;
            -webkit-app-region: no-drag;

            .icon {
                font-size: 18px;
                color: darken(white, 15%);
                margin: 10px;

                &:hover {
                    cursor: pointer;
                    color: white;

                }
            }
        }
    }
</style>