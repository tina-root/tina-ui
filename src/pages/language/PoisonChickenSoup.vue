<template>
    <div>
        <a-card class="result-success" :bordered="false">
            <p id="sentence"> {{ content }}</p>
            <a-button class="btn" @click="getContent" type="primary" shape="round" :loading="loading" size="large">再来一碗</a-button>
        </a-card>
    </div>
</template>

<script>
import {poisonChickenSoup} from '@/services/language/index'

export default {
    name: 'PoisonChickenSoup',
    data() {
        return {
            title: '',
            description: '',
            content: '',
            desc: '鸡汤虽然补！可不要贪碗哦。(请不要直接调用接口，已经做了1分钟缓存控制)',
            loading: false,

        }
    },
    created() {
        this.getContent()
    },
    methods: {
        getContent() {
            this.loading=true
            poisonChickenSoup().then(reslut => {
                this.content = reslut.data.data
                this.loading= false
            })
        }
    }
}
</script>

<style scoped lang="less">
.result-success {
    text-align: center;
    .btn {
        font-size: .9rem;
        height: 2.25rem;
        font-weight: 500;
        margin-bottom: 20px;
    }
    #sentence{
        padding: 10px;
        font-size: 40px;
    }
}
</style>
