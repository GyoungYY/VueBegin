<template>
    <div class="components-container">
        <h1>less</h1>
        <div class="list-item">
            测试npm install less less-loader --save   lang="less"，背景黑色，字体白色即没问题
        </div>

        <h1>vue-cropper</h1>
        <div class="list-item">
            头像裁剪插件，npm install vue-cropper --save
            <a href="https://github.com/xyxiao001/vue-cropper" target="_blank">github地址</a>
        </div>
        <div style="height: 500px;">
            <vueCropper
                ref="cropper2"
                :img="example2.img"
                :outputSize="example2.size"
                :outputType="example2.outputType"
                :info="example2.info"
                :canScale="example2.canScale"
                :autoCrop="example2.autoCrop"
                :autoCropWidth="example2.autoCropWidth"
                :autoCropHeight="example2.autoCropHeight"
                :fixed="example2.fixed"
                :fixedNumber="example2.fixedNumber"
            ></vueCropper>
        </div>
        <el-button type="primary" @click="preview()">预览(base64)</el-button>
        <img :src="url" style="width: 200px;height: 200px;">

        <h1>bootstrap</h1>
        <div class="list-item">
            引入bootstrap，npm install jquery --save  npm install bootstrap --save，在webpack.base.conf.js中配置，
            然后在main.js中引入。
            <a href="http://blog.csdn.net/wild46cat/article/details/77662555" target="_blank">参考博客</a>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Action <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import vueCropper from 'vue-cropper'
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {
            ElButton,
            vueCropper
        },
        data() {
            return {
                url: '',
                example2: {
                    img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
                    info: true,
                    size: 1,
                    outputType: 'jpeg',
                    canScale: false,
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 300,
                    autoCropHeight: 250,
                    // 开启宽度和高度比例
                    fixed: true,
                    fixedNumber: [4, 3]
                }
            }
        },
        methods: {
            preview() {
                this.$refs.cropper2.getCropData((data) => {
                    this.url = data;
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .components-container {
        margin-bottom: 80px;
    }

    .components-container .list-item {
        background-color: #ddd;
        padding: 10px;
        margin: 10px 0;
    }
</style>
