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
        imageWidth
          <a-tag color="pink">
             {{ relust.imageWidth }}
          </a-tag>
        </p>
        <p>
        imageHeight
          <a-tag color="pink">
             {{ relust.imageHeight }}
          </a-tag>
        </p>

        <p>
        shootingTime
          <a-tag color="orange">
             {{ relust.shootingTime }}
          </a-tag>
        </p>
        <p>
        equipment
          <a-tag color="green">
             {{ relust.equipment }}
          </a-tag>
        </p>
        <p>
         lng,lat
          <a-tag color="cyan">
           {{ relust.lng }} {{ relust.lat }}
          </a-tag>
        </p>
        <p>
        address
          <a-tag color="blue">
             {{ relust.address }}
          </a-tag>
        </p>
        <p>
        error
          <a-tag color="red">
            {{ relust.msg }}
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