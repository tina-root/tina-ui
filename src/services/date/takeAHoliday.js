const BASE_URL = 'http://tina.tinaroot.cn/date/takeAHoliday/';
import {request, METHOD} from '@/utils/request'

/**
 * 距离今天最近的一个节假日安排
 * @returns list
 */
export async function aHolidayScheduleClosestToToday() {
    return request(BASE_URL+"aHolidayScheduleClosestToToday", METHOD.GET)
}

/**
 * 节假日安排
 * @returns list
 */
export async function holidayArrangement() {
    return request(BASE_URL+"holidayArrangement", METHOD.GET)
}



export default {
    aHolidayScheduleClosestToToday,holidayArrangement
}