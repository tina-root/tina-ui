
const BASE_URL = 'http://tina.tinaroot.cn/images/';
import {request, METHOD} from '@/utils/request'

/**
 * 在线获取图片图片信息
 * @returns list
 */
export async function urlInformation(query) {
    return request(BASE_URL+"urlInformation", METHOD.GET,query)
}



export default {
    urlInformation
}