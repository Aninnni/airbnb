import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  // (路由)跳转到详情页 的事件逻辑
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

// 根据有没有name来判断要展示的footer，有name就展示有颜色的内容，没有name就展示“显示全部”。
SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter