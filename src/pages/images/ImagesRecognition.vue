<template>
  <div>
    <a-card class="result-success" :bordered="false">
      <div>
        <p>
          <a-input-search placeholder="输入在线地址" @search="onLineIdentification"/>
        </p>
      </div>
      <div>
        <p>
          <a-tag color="pink">
            imageWidth {{ relust.imageWidth }}
          </a-tag>
        </p>
        <p>
          <a-tag color="pink">
            imageHeight {{ relust.imageHeight }}
          </a-tag>
        </p>

        <p>
          <a-tag color="orange">
            shootingTime {{ relust.shootingTime }}
          </a-tag>
        </p>
        <p>
          <a-tag color="green">
            equipment {{ relust.equipment }}
          </a-tag>
        </p>
        <p>
          <a-tag color="cyan">
            lng,lat {{ relust.lng }} {{ relust.lat }}
          </a-tag>
        </p>
        <p>
          <a-tag color="blue">
            address {{ relust.address }}
          </a-tag>
        </p>
        <p>
          <a-tag color="red">
            error{{ relust.msg }}
          </a-tag>
        </p>

      </div>
    </a-card>
  </div>
</template>

<script>
import {urlInformation} from '@/services/images/index'

export default {
  name: "ImagesRecognition",
  data() {
    return {
      relust: '',
      desc: '支持在线URL获取图片信息',
      loading: false,
    }
  },
  created() {

  },
  methods: {
    onLineIdentification(fileUrl) {
      urlInformation({fileUrl: fileUrl}).then(relust => {
        this.relust = relust.data
      })
    }
  }

}
</script>

<style scoped>

</style>