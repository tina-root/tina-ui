const BASE_URL = 'http://tina.tinaroot.cn/language/';
import {request, METHOD} from '@/utils/request'

/**
 * 毒鸡汤
 * @returns list
 */
export async function poisonChickenSoup() {
    return request(BASE_URL+"poisonChickenSoup", METHOD.GET, {})
}

export default {
    poisonChickenSoup
}