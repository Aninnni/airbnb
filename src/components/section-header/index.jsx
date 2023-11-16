import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const {title, subtitle} = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {/* 判断一下有值再展示 */}
      { subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeaderWrapper>
  )
})
// 类型验证
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle:PropTypes.string
}

export default SectionHeader