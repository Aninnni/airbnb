import React, { memo } from 'react'
import { PictureWrapper } from './style'
import { useSelector } from 'react-redux'

const DetailPictures = memo(() => {
  // 1.从redux获取数据
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))

  return (
    <PictureWrapper>
        <div className='pictures'>
            <div className='left'>
              <div className='item'>
                <img src={detailInfo?.picture_urls?.[0]} alt="" />
                <div className='cover'></div>
              </div>
            </div>
            <div className='right'>
              {
                detailInfo?.picture_urls?.slice(1, 5).map(item => {
                  return (
                    <div className='item' key={item}>
                      <img src={item} alt="" />
                      <div className='cover'></div>
                    </div>
                  )
                })
              }
            </div>
       </div>
    </PictureWrapper>
  )
})

export default DetailPictures