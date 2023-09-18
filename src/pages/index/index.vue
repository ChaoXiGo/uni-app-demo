<script setup lang="ts">
    import { onLoad } from '@dcloudio/uni-app'
    import { getHomeBannerAPI, getHomeCategoryPanelAPI, getHomeHotAPI } from '@/services/home'
    import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
    import { ref } from 'vue'
    import CustomNavbar from './components/CustomNavbar.vue'
    import CategoryPanel from './components/CategoryPanel.vue'
    import HotPanel from './components/HotPanel.vue'
    import type { MyGuessInstance } from '@/types/component'
    import PageSkeleton from './components/HomePageSkeleton.vue'

    const bannerList = ref<BannerItem[]>([])
    const getHomeBannerData = async () => {
        const res = await getHomeBannerAPI(2)
        bannerList.value = res.result
    }

    const categoryList = ref<CategoryItem[]>([])
    const getCategoryPanel = async () => {
        const res = await getHomeCategoryPanelAPI()

        categoryList.value = res.result
    }

    const hotList = ref<HotItem[]>([])
    const getHomeHotPanel = async () => {
        const res = await getHomeHotAPI()
        hotList.value = res.result
    }

    // 触底获取更多
    const guessRef = ref<MyGuessInstance>()
    const onScrolltolower = () => {
        guessRef.value?.getMore()
    }

    const isTriggered = ref(false)
    // 自定义下拉刷新被触发
    const onRefresherrefresh = async () => {
        isTriggered.value = true
        // 页面属性重置
        guessRef.value?.resetData()
        // 加载数据
        await Promise.all([
            getHomeBannerData(),
            getCategoryPanel(),
            getHomeHotPanel(),
            guessRef.value?.getMore(),
        ])
        // 关闭动画
        isTriggered.value = false
    }

    // 加载中标记
    const isLoading = ref(false)
    onLoad(async () => {
        isLoading.value = true
        await Promise.all([getHomeBannerData(), getCategoryPanel(), getHomeHotPanel()])
        isLoading.value = false
    })
</script>

<template>
    <CustomNavbar />
    <scroll-view
        scroll-y
        class="scroll-view"
        @scrolltolower="onScrolltolower()"
        refresher-enabled
        @refresherrefresh="onRefresherrefresh"
        :refresher-triggered="isTriggered">
        <PageSkeleton v-if="isLoading" />
        <template v-else>
            <MySwiper :list="bannerList" />
            <CategoryPanel :list="categoryList" />
            <HotPanel :list="hotList" />
            <MyGuess ref="guessRef" />
        </template>
    </scroll-view>
</template>

<style lang="scss">
    page {
        background-color: #f7f7f7;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .scroll-view {
        flex: 1;
    }
</style>
