import React, { memo } from 'react'
import { Pagination } from 'antd';

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionsCreate';

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 2)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  
  // 事件处理的逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(page, pageSize) {
    console.log(page)
    window.scrollTo(0, 0)
    // 更新最新的页码：redux => currentPage
    dispatch(fetchRoomListAction(page-1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination  total={totalPage} onChange={pageChangeHandle}/>
            <div className='desc'>
              第{startCount} - {endCount} 个房源, 共超过{totalCount}个。
            </div>
          </div>
        )
      }


      
    </PaginationWrapper>
  )
})

export default EntirePagination