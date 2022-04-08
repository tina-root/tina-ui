const PY_API = 'http://py.tinaroot.cn/api/docker/';
import {request, METHOD} from '@/utils/request'


/**
 * 获取Docker信息
 * @returns list
 */
export async function dockerInfo(query) {
    return request(PY_API + "v1/info", METHOD.GET, query)
}


/**
 * 获取全部镜像
 * @returns list
 */
export async function imagesList(query) {
    return request(PY_API + "v1/imagesList", METHOD.POST, query)
}

/**
 * 获取全部实例
 * @returns list
 */
export async function instList(query) {
    return request(PY_API + "v1/instList", METHOD.POST, query)
}


export default {
    imagesList, dockerInfo, instList
}