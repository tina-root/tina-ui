const BASE_URL = 'http://127.0.0.1:5000/api/language/';
// const BASE_URL = 'http://py.tinaroot.cn/api/language/';
import {request, METHOD} from '@/utils/request'

/**
 * 毒鸡汤
 * @returns list
 */
export async function poisonChickenSoup() {
    return request(BASE_URL+"v1/poisonChickenSoup", METHOD.GET, {})
}

export default {
    poisonChickenSoup
}