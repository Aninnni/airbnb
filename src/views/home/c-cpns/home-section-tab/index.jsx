import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionTabWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'


const HomeSectionTab = memo((props) => {
    // 从props拿到数据
    const { infoData } = props

    // 一般组件内部定义的数据放在最上面
    // initialName作为初始化值，没有取到对象的时候给个{}，如果取到{}其实是个空数组 这个initialName又是undefined，再给它一个""
    // 建议不用useEffect 不然组件会渲染3次，1.没数据时；2.来新数据时；3.来数据又设置新的name时。
    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)
    // 数据转换
    const tabNames = infoData.dest_address?.map(item => item.name)
    // useCallback 防止组件每次渲染的时候这个函数都重新定义新函数 导致子组件也一直重新渲染.
    const tabClickHandle = useCallback( (index, name)=> {
      // 根据name(这里的参数item)对数据进行过滤.这里做的是tab的切换。
      setName(name)
    }, [])

    console.log("dest_list",infoData.dest_list)
    console.log("dest_item",infoData.dest_list?.[name])

  return (
    <SectionTabWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />      
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>      
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
      <SectionFooter name={name}/>
    </SectionTabWrapper>
  )
})

HomeSectionTab.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionTab