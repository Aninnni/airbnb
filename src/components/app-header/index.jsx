import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderRigth from './children-cpn/header-right'
import HeaderCenter from './children-cpn/header-center'
import HeaderLeft from './children-cpn/header-left'
// 函数式组件
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRigth/>
    </HeaderWrapper>
  )
})

export default AppHeader 