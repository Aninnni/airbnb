import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSection = memo((props) => {
  const { infoData } = props

  return (
    <SectionWrapper>
      {/* 标题和副标题 */}
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      {/* 房屋的块儿 */}
      <SectionRooms roomList={infoData.list} itemWidth="25%"/>
      <SectionFooter/>
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  infoData: PropTypes.object
}

export default HomeSection