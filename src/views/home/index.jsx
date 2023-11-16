import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection from './c-cpns/home-section'
import HomeSectionTab from './c-cpns/home-section-tab'
import { isEmptyOject } from '@/utils'
import HomeSectionPlus from './c-cpns/home-section-plus'

const Home = memo(() => {
  // 组件内部定义的数据放在最上面
  // const [name, setName] = useState("佛山")

  // 从redux中获取数据
  const {goodPriceInfo, highScoreInfo, discountInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  // shallowEqual 浅拷贝，发现有改变的时候才需要重新获取数据，然后home才要重新渲染？

  console.log("获取了goodPriceInfo",goodPriceInfo)

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("dispatch了fetchHomeDataAction方法")
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  // 没啥依赖可以写个空数组，更新多少次都只会渲染一次。

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* 热门目的地 */}
        {/* 当discountInfo不为空的时候再进行渲染。（这里做的是tab切换的逻辑。） */}
        {isEmptyOject(discountInfo) && <HomeSectionTab infoData={discountInfo} />}
        {/* 封装好的 高性价比和高分房源 */}
        {isEmptyOject(goodPriceInfo) && <HomeSection infoData={goodPriceInfo}/>}
        {isEmptyOject(highScoreInfo) && <HomeSection infoData={highScoreInfo}/>}
        {/* plus */}
        {isEmptyOject(plusInfo) && <HomeSectionPlus infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home

{/* 没封装的 */}
{/* 折扣数据 */}
{/* <div className='discount'> */}
{/* <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} /> */}
{/* <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/> */}
{/* 这里宽度设置没有用。（根据不同的name切换数据） */}
{/* <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.3333%"/> */}
{/* </div> */}

{/* <div className='.good-price'>
    <SectionHeader title={goodPriceInfo.title}/>
    <SectionRooms roomList={goodPriceInfo.list}/>
  </div>
  <div className='.high-score'>
    <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
    <SectionRooms roomList={highScoreInfo.list}/>
  </div> */}

// 数据转换
// const tabNames = discountInfo.dest_address?.map(item => item.name)
// useCallback 防止组件每次渲染的时候这个函数都重新定义新函数 导致子组件也一直重新渲染.
// const tabClickHandle = useCallback(function (index, name) {
// 根据name(这里的参数item)对数据进行过滤.这里做的是tab的切换。
// setName(name)
// }, [])