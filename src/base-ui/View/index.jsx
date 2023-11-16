import React, { memo } from 'react'
import { ViewWarppar } from './style'


const View = memo((props) => {
  /** 定义内部的状态 */

  return (
    <ViewWarppar>

      <div className='view'>
        <div className='view-content' >
          {props.children}
        </div>
      </div>
    </ViewWarppar>
  )
})

export default View