<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" title="容器镜像" :total="dockerInfo.Images">
          <a-tooltip title="容器个数" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <a-tag color="blue">容器版本 {{ dockerInfo.ServerVersion }}</a-tag>
          </div>
          <div slot="footer">
            <a-tag color="cyan">安装目录 {{ dockerInfo.DockerRootDir }}</a-tag>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" title="容器实例" :total=" dockerInfo.Containers ">
          <a-tooltip title="实例总数以及实例使用" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>

          <div>
            运行:
            <a-tag color="green">{{ dockerInfo.ContainersRunning }}</a-tag>
            停止:
            <a-tag color="pink">{{ dockerInfo.ContainersStopped }}</a-tag>
            暂停:
            <a-tag color="red">{{ dockerInfo.ContainersPaused }}</a-tag>
            <a-progress :percent="Math.round(dockerInfo.ContainersRunning/dockerInfo.Containers*100)"/>
          </div>
          <div slot="footer" style="white-space: nowrap;overflow: hidden">
            <a-tag color="purple">实例总数以及实例使用</a-tag>
          </div>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" style="margin-top: 24px" :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" :tab="'实例'+instList.length" key="1">
            <a-table :columns="instColumns" :rowKey="(record,index)=>{return index}" :dataSource="instList"
                     :pagination="false">
              <span slot="created" slot-scope="created">
              {{ created|timestampToTime }}
            </span>
              <span slot="state" slot-scope="state">
               <a-tag :color="state=='running'?'green':'red'">{{ state }}</a-tag>
            </span>
            </a-table>
          </a-tab-pane>

          <a-tab-pane :tab="'镜像'+imagesList.length" key="2">
            <a-table :columns="imagesColumns" :rowKey="(record,index)=>{return index}" :dataSource="imagesList"
                     :pagination="false">
              <span slot="size" slot-scope="size">
              {{ size|formatMB }} MB
              </span>
              <span slot="created" slot-scope="created">
              {{ created|timestampToTime }}
              </span>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>


  </div>
</template>

<script>
import ChartCard from '../../../components/card/ChartCard'
import {dockerInfo, imagesList, instList} from '@/services/docker/index'

const instColumns = [{
  title: '镜像名',
  dataIndex: 'Names'
}, {
  title: '基础镜像',
  dataIndex: 'Image'
}, {
  title: '运行状态',
  dataIndex: 'State',
  scopedSlots: {customRender: 'state'},
}, {
  title: '实例状态',
  dataIndex: 'Status',
}, {
  title: '创建时间',
  dataIndex: 'Created',
  scopedSlots: {customRender: 'created'},
}]

const imagesColumns = [{
  title: '镜像标签',
  dataIndex: 'RepoTags'
}, {
  title: '大小',
  dataIndex: 'Size',
  scopedSlots: {customRender: 'size'},
}, {
  title: '创建时间',
  dataIndex: 'Created',
  scopedSlots: {customRender: 'created'},
}]

export default {
  name: 'Docker',
  data() {
    return {
      loading: true,
      param: {
        token: '00b6f1e5-5f05-4370-96ba-6a5a415641b5'
      },
      dockerInfo: {},
      imagesList: [],
      instList: [],
      instColumns: instColumns,
      imagesColumns: imagesColumns,
    }
  },
  filters: {
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    formatMB(value) {
      return Math.round((value / 1024 / 1024), 2)
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
    this.getDockerInfo()
    this.getImagesList()
    this.getInstList()
  },
  components: {ChartCard},
  methods: {
    getDockerInfo() {
      dockerInfo(this.param).then(result => {

        this.dockerInfo = result.data.data
      })
    },
    getInstList() {
      instList(this.param).then(result => {
        this.instList = result.data.data
      })
    },
    getImagesList() {
      imagesList(this.param).then(result => {
        this.imagesList = result.data.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.extra-wrap {
  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a:not(:first-child) {
      margin-left: 24px;
    }
  }
}

@media screen and (max-width: 992px) {
  .extra-wrap .extra-item {
    display: none;
  }
}

@media screen and (max-width: 576px) {
  .extra-wrap {
    display: none;
  }
}

</style>
