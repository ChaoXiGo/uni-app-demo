import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageParams, PageResult } from '@/types/global'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite: number) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}

export const getHomeCategoryPanelAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli',
    })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}

// src/services/home.ts
/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}
