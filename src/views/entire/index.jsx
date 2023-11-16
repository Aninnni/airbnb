import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpn/entire-rooms'
import EntirePagination from './c-cpn/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionsCreate'


const Entire = memo(() => {
  // 发送网络请求，获取数据，并且保存当前的页面等等......
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire