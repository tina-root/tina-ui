
const BASE_URL = 'http://tina.tinaroot.cn/projectList';
import {request, METHOD} from '@/utils/request'

/**
 * 获取项目列表信息
 * @returns list
 */
export async function projectList() {
    return request(BASE_URL, METHOD.GET, {})
}

export default {
    projectList
}