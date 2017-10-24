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
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeIndex: 'vue',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                if(key === 'vue'){
                    this.$router.push({path:'/'});
                }
                if(key === 'components'){
                    this.$router.push({path:'/components'});
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
</style>
