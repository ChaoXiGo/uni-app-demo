import type { PageResult } from './global'

export type SubTypeItem = {
    id: string
    title: string
    goodsItems: PageResult<GoodsItem>
}

export type HotResult = {
    id: number
    title: string
    bannerPicture: string
    subTypes: SubTypeItem[]
}
