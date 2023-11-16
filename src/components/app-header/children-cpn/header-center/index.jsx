import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      {/* 搜索框 */}
      <div className='search-bar'>
        <div className='text'>搜索房源和体验</div>
        <span className='icon'>
          {/* icon包成了组件 */}
          <IconSearchBar/>
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter