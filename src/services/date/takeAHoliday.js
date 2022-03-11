const BASE_URL = 'http://tina.tinaroot.cn/date/takeAHoliday/';
const PY_API = 'http://py.tinaroot.cn/api/date/';
import {request, METHOD} from '@/utils/request'



/**
 * 节假日安排
 * @returns list
 */
export async function schedule() {
    return request(PY_API+"v1/schedule", METHOD.GET)
}



export default {
    schedule
}