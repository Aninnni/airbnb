import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionPlusWrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import View from '@/base-ui/View'
import SectionFooter from '@/components/section-footer'


const HomeSectionPlus = memo((props) => {
  const { infoData } = props

  return (
    <SectionPlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
        <View>
          {
            infoData.list.slice(0,5).map(item =>{
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </View>
      </div>
        <SectionFooter name="plus"/>
    </SectionPlusWrapper>
  )
})

HomeSectionPlus.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionPlus