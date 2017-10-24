<template>
    <div>
        <div style="background-color: #ddd;margin: 10px 0;padding: 10px;">基于 Vue.js 的移动端组件库mini-ui</div>
        <el-button @click="toast">点击弹出toast</el-button>
        <el-button @click="toast2">点击弹出带有icon的toast</el-button>
        <mt-datetime-picker
            ref="picker"
            type="time"
            v-model="pickerValue">
        </mt-datetime-picker>

        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { DatetimePicker } from 'mint-ui';
    Vue.component(DatetimePicker.name, DatetimePicker);

    import { Toast } from 'mint-ui';

    import { Picker } from 'mint-ui';
    Vue.component(Picker.name, Picker);

    export default {
        data(){
            return{
                pickerValue:'',
                slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
            }
        },
        methods:{
            openPicker() {
                this.$refs.picker.open();
            },
            toast(){
                Toast('提示信息');
            },
            toast2(){
                Toast({
                    message: '操作成功',
                    iconClass: 'icon icon-success'
                });
            },
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            },
        }
    }
</script>

<style>

</style>
