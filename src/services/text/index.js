const BASE_URL = 'http://tina.tinaroot.cn/text/englishCaseConversion/';
import {request, METHOD} from '@/utils/request'

/**
 * 转大写
 * @returns list
 */
export async function capitalAll(query) {
    return request(BASE_URL + "capitalAll", METHOD.GET, query)
}

/**
 * 转小写
 * @returns list
 */
export async function lowerCaseAll(query) {
    return request(BASE_URL + "lowerCaseAll", METHOD.GET, query)
}

/**
 * 首先字母转大写
 * @returns list
 */
export async function capitalInitialCase(query) {
    return request(BASE_URL + "capitalInitialCase", METHOD.GET, query)
}

/**
 * 首先字母转小写
 * @returns list
 */
export async function lowerInitialCase(query) {
    return request(BASE_URL + "lowerInitialCase", METHOD.GET, query)
}


export default {
    capitalAll, lowerCaseAll, capitalInitialCase, lowerInitialCase
}