<template>
    <div class="outer_panel">
        <div class="header_panel">
            <div class="title_panel"></div>
            <div class="menu_panel">
                <div>x</div>
            </div>
        </div>
        <div class="main_panel"></div>
    </div>
</template>

<script>
    export default {
        name:'IndexPage',

    }
</script>

<style lang="less" scoped>
    .outer_panel{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        .header_panel{
            height: 80px;
            width: 100%;
            background-color: gray;
            -webkit-app-region: drag;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .menu_panel{
                height: auto;
                width: auto;
            }
        }

        .main_panel{
            width: 100%;
            flex: 1;
        }
    }
   
</style>