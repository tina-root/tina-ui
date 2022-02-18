<template>
    <div>
        <div>
            <a-textarea v-model="text" placeholder="请粘贴或者输入需要操作的内容" :maxLength="2500"
                        :autosize="{ minRows: 12, maxRows: 25 }"/>
        </div>

        <div class="btn">
            <a-button class="ant-btn" type="primary" @click="capitalAll">全大写</a-button>
            <a-button class="ant-btn" type="primary" @click="lowerCaseAll">全小写</a-button>
            <a-button class="ant-btn" type="primary" @click="capitalInitialCase">首先字母大写</a-button>
            <a-button class="ant-btn" type="primary" @click="lowerInitialCase">首先字母小写</a-button>
            <a-button class="ant-btn" type="dashed" @click="copy">复制</a-button>
            <a-button class="ant-btn" type="danger" @click="cut">剪切</a-button>
            <a-button class="ant-btn" type="danger" @click="empty">清空</a-button>
        </div>
    </div>
</template>

<script>
import {capitalAll, lowerCaseAll, capitalInitialCase, lowerInitialCase} from '@/services/text/index'

export default {
    name: "EnglishCaseConversion",
    data() {
        return {
            text: ''
        }
    },
    created() {


    },
    methods: {
        /**
         * 复制
         */
        copy() {
            this.$copyText(this.text).then(function (e) {
            }, function (e) {
            })
            this.$message.info('已复制');
        },
        /**
         * 剪切
         */
        cut() {
            this.copy();
            this.empty()
        },
        /**
         * 清空
         */
        empty() {
            this.text = ''
        },
        /***
         * 全大写
         */
        capitalAll() {
            capitalAll({text: this.text}).then(reslut => {
                    this.text = reslut.data
                }
            );
        },
        /**
         * 全小写
         */
        lowerCaseAll() {
            lowerCaseAll({text: this.text}).then(reslut => {
                    this.text = reslut.data
                }
            );
        },
        /**
         * 首先字母转大写
         */
        capitalInitialCase() {
            capitalInitialCase({text: this.text}).then(reslut => {
                    this.text = reslut.data
                }
            );
        },
        /**
         * 首先字母转小写
         */
        lowerInitialCase() {
            lowerInitialCase({text: this.text}).then(reslut => {
                    this.text = reslut.data
                }
            );
        }
    }
}
</script>

<style scoped>
.ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
}

.btn {
    padding: 15px 0 0 0;
}
</style>