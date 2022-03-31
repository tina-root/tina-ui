import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
    routes: [
        {
            path: '*',
            name: '404',
            component: () => import('@/pages/exception/404'),
        },
        {
            path: '/',
            name: '首页',
            component: TabsView,
            redirect: '/dashboard/docker',
            children: [
                {
                    path: 'dashboard',
                    name: '控制台',
                    meta: {
                        icon: 'dashboard'
                    },
                    component: BlankView,
                    children: [
                        {
                            path: 'docker',
                            name: 'Docker工作台',
                            meta: {
                                page: {
                                    closable: false
                                }
                            },
                            component: () => import('@/pages/dashboard/docker/Docker'),
                        },
                        {
                            path: 'workplace',
                            name: '工作台',
                            component: () => import('@/pages/dashboard/analysis'),
                        }
                    ]
                },
                {
                    path: 'list',
                    name: '列表页',
                    meta: {
                        icon: 'appstore'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'project',
                            name: '项目列表',
                            component: () => import('@/pages/list/ProjectList'),
                        }
                    ]
                },
                {
                    path: 'text',
                    name: '文本工具',
                    meta: {
                        icon: 'file-text'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'englishCaseConversion',
                            name: '英文大小写转换',
                            component: () => import('@/pages/text/EnglishCaseConversion.vue'),
                        }
                    ]
                },
                {
                    path: 'language',
                    name: '语言工具',
                    meta: {
                        icon: 'hourglass'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'poisonChickenSoup',
                            name: '毒鸡汤',
                            component: () => import('@/pages/language/PoisonChickenSoup'),
                        }
                    ]
                },
                {
                    path: 'date',
                    name: '日期时间',
                    meta: {
                        icon: 'experiment'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'takeAHoliday',
                            name: '2022放假安排',
                            component: () => import('@/pages/date/TakeAHoliday'),
                        }
                    ]
                },
                {
                    path: 'images',
                    name: '图片工具',
                    meta: {
                        icon: 'picture'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'imagesRecognition',
                            name: '获取图片信息',
                            component: () => import('@/pages/images/ImagesRecognition'),
                        }
                    ]
                },
                {
                    path: 'convenienceQuery',
                    name: '便民查询',
                    meta: {
                        icon: 'search'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'project',
                            name: '项目列表',
                            component: () => import('@/pages/list/ProjectList'),
                        }
                    ]
                },
                {
                    path: 'devTools',
                    name: '开发工具',
                    meta: {
                        icon: 'tool'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'project',
                            name: '项目列表',
                            component: () => import('@/pages/list/ProjectList'),
                        }
                    ]
                },
                {
                    path: 'encodin',
                    name: '编码加密',
                    meta: {
                        icon: 'lock'
                    },
                    component: PageView,
                    children: [
                        {
                            path: 'project',
                            name: '项目列表',
                            component: () => import('@/pages/list/ProjectList'),
                        }
                    ]
                }
            ]
        },
    ]
}

export default options
