import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Rate } from 'antd';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
  // 这里有把item的点击事件传出去
  const { itemData, itemWidth = "25%", itemClick} = props

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  // 图片在这里
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt=""/>
    </div> 
  )

  const sliderElement = (
        <div className='slider'>
    <div className='control'>
      <div className='btn left'>
        <IconArrowLeft width="30" height="30"/>
      </div>
      <div className='btn right'>
        <IconArrowRight width="30" height="30"/>
      </div>
    </div>
    <div className='cover' >
      <img src={itemData?.picture_urls?.[0]} />
    </div>

  </div>
  )

  return (
    // verifyColor 拿到房屋描述的动态颜色和默认颜色
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className='inner'>
        { !itemData.picture_urls ? pictureElement: sliderElement }
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
      </div>  

      <div className='bottom'>
        <Rate
        // 动态的评分 ?? 在null或者undefined的时候才用后面的值.
        value={itemData.star_rating ?? 5}
        Rate allowHalf disabled defaultValue={0.1} 
        style={{ fontSize: "12px", color: "#00848a"}}
        />

        {/* 评论个数 以及判断一下itemData 有数据就加个 点*/}
        <span className='count'> {itemData.reviews_count}</span>
        {
        itemData.bottom_info && <span className='extra'> · {itemData.bottom_info?.content}</span>
        }

      </div>

    </ItemWrapper>
  )

})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem