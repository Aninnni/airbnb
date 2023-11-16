// 展示房屋信息的文字的组件
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  // 解构没解出来就给个空数组
  const { roomList = [], itemWidth } = props

  const _rootList = roomList.slice(0, 8) || []
  console.log("roomlist",_rootList)
  return (
    <RoomsWrapper>
      {
        _rootList.map(item => {
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms