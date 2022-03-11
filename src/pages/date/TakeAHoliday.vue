<template>
    <div>
        <a-table :columns="columns" :rowKey="(record,index)=>{return index}" :dataSource="holidayArrangementData"
            :pagination="false">

            <span slot="holiday" slot-scope="holiday">
              <a-tag :color="holiday == true ? 'green' : 'volcano'">
                {{ holiday == true ? '收工' : '翻工' }}
              </a-tag>
            </span>
        </a-table>
    </div>
</template>

<script>
import {schedule} from '@/services/date/takeAHoliday'

const columns = [{
    title: '日期',
    dataIndex: 'date'
}, {
    title: '名称',
    dataIndex: 'name',
}, {
    title: '类型',
    dataIndex: 'holiday',
    scopedSlots: {customRender: 'holiday'},
}, {
    title: '薪水倍数',
    dataIndex: 'wage',
}]
export default {
    name: "TakeAHoliday",
    data() {
        return {
            notice: '',
            desc: '',
            holidayArrangementData: [],
            columns: columns,
        }
    },
    created() {
        this.schedule()
    },
    methods: {
        schedule() {
            schedule().then(reslut => {
                console.log(reslut.data.data.holiday)
                this.notice=reslut.data.data.holiday
                this.desc = this.notice
                this.holidayArrangementData=reslut.data.data.schedule
            })
        }
    }
}
</script>

<style scoped>

</style>