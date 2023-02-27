<template>
    <div class="header_bar_panel">
        <div class="title_panel">
            <img class="icon_img" :src="logoIcon"/>
            <div class="title_text_panel"> Electron-Vue模板应用</div>
           
        </div>
        <div class="menu_panel">
            <i class="icon iconfont icon-hide" @click="handleClick('minimizeWindow')"></i>
            <!-- 缩小 -->
            <i v-show="isWinMaximized" class="icon iconfont icon-zoom-out" @click="handleClick('restore')"></i>
            <!-- 放大 -->
            <i  v-show="!isWinMaximized" class="icon iconfont icon-zoom-in" @click="handleClick('maximize')"></i>
            <i class="icon iconfont icon-close" @click="handleClick('close')"></i>
        </div>
    </div>
</template>

<script>

import logoIcon from '@/assets/img/logo.png'
export default {
    name:'HeaderBarComponent',
    data() {
        return {
            isWinMaximized: false,
            logoIcon:logoIcon
        }
    },
    methods: {
        handleClick(tag) {
            switch (tag) {
                case 'close':
                    // 不直接关闭，只是隐藏到托盘
                    window.ElectronAPI.hideWindow()
                    break
                case 'minimizeWindow':
                    window.ElectronAPI.minimizeWindow()
                    break
                //放大
                case 'maximize':
                    window.ElectronAPI.maximizeWindow()
                    break
                // 缩小
                case 'restore':
                    window.ElectronAPI.restoreWindow()
                    break
                default:
                    return
            }
        }
    },

    mounted(){
        window.ElectronAPI.addWinStatusListener('isMaximized',(result)=>{
            this.isWinMaximized = result
            console.log(result,'1');
        })

        window.ElectronAPI.addWinStatusListener('isMaximized',(result)=>{
            console.log(result,'2');
        })
    }
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

        .title_panel {
            width: auto;
            height: 100%;
            color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          
            .icon_img{
                width: 28px;
                height: 28px;
                margin: 0 10px;
            }

            .title_text_panel{
                width: auto;
                height: auto;
                font-size: 20px;
                font-weight: 700;
            }
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
                    font-weight: 700;

                }
            }
        }
    }
</style>