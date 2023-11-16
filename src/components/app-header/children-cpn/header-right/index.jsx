import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRigth = memo(() => {
  // 面板的状态
  const [ showPanel, setShowPanel ] = useState(false)
  // 副作用代码 监听window的点击
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)
    // 这里参数写了true就是会捕获。
    return () => {
      // 取消监听
      window.removeEventListener("click", windowHandleClick)
    }
    
  }, [])
  //它不需要依赖别人 写个空数组，就不管渲染多少次它只执行一次。


  // 点击的动作(事件处理的函数。它会冒泡到根节点。)
  function profileClickHandle() {
    setShowPanel(true)
  }


  return (
    <RightWrapper>
      <div className='btns'>
        {/* <span className='btn'>登录</span>
        <span className='btn'>注册</span> */}
        <span className='btn'><IconGlobal/></span>

      </div>

      <div className='profile' onClick={profileClickHandle}>
        {/* 两个icon */}
        <IconMenu/>
        <IconAvatar/>

        {/* 头像点击弹出的面板 和它的true的逻辑 */}

        { showPanel && (        
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>帮助中心</div>
            </div>
          </div>
          )}

      </div>

    </RightWrapper>
  )
})

export default HeaderRigth