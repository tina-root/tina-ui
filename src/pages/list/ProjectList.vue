<template>
    <div class="card-list">
        <a-list
            :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
            :dataSource="dataSource"
        >
            <a-list-item slot="renderItem" slot-scope="item">
                <template v-if="item.add">
                    <a-button class="new-btn" type="dashed">
                        <a-icon type="plus"/>
                        新增产品
                    </a-button>
                </template>
                <template v-else>
                    <a-card :hoverable="true">
                        <a-card-meta>
                            <div style="margin-bottom: 3px" slot="title">{{ item.name }}</div>
                            <a-avatar class="card-avatar" slot="avatar" :src="item.icon" size="large"/>
                            <div class="meta-content" slot="description">
                                {{ item.createTime }}<br>
                                {{ item.describe }}
                            </div>
                        </a-card-meta>
                        <a :href="item.url" target="_blank" slot="actions">访问</a>
                    </a-card>
                </template>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
import {projectList} from '@/services/project/index'

export default {
    name: 'ProjectList',
    data() {
        return {
            desc: '段落示意：项目整合可视化寻找方便管理。',
            linkList: [],
            extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
            dataSource: []
        }
    },
    created() {
        this.getProjectList()
    },
    methods: {
        getProjectList() {
            projectList().then(result => {
                this.dataSource=result.data
            })
        }
    }
}
</script>

<style lang="less" scoped>
.card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
}

.new-btn {
    border-radius: 2px;
    width: 100%;
    height: 187px;
}

.meta-content {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 64px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

</style>
