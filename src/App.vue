<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="components">前端组件</el-menu-item>
            <el-menu-item index="vue">Vue学习</el-menu-item>
            <el-submenu index="2">
                <template slot="title">文档学习</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="mintui">Mint-UI</el-menu-item>
        </el-menu>
        <router-view/>
        <footer>
            <div>bilibili阿广</div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeIndex: 'components',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                if(key === 'vue'){
                    this.$router.push({path:'/vue'});
                    return;
                }
                if(key === 'components'){
                    this.$router.push({path:'/components'});
                    return;
                }
                if(key === 'mintui'){
                    this.$router.push({path:'/mintui'});
                    return;
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

    footer{
        background-color: #324157;
        color: #fff;
        padding:20px 0;
        position: fixed;
        bottom: 0;
        width:100%;
    }
</style>
