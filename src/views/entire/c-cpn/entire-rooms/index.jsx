import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  // 从redux中获取roomlist的数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  // 点击图片的事件处理
  const navigete = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigete("/detail")
  }, [navigete, dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem 
              itemData={item} itemWidth="20%" key={item.id}
              itemClick={itemClickHandle}
              
              />
            )
          })
        }
      </div>

        { isLoading && <div className='cover'></div> }
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms