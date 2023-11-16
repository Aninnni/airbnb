import styled from "styled-components";


export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemwidth};

  /* 每个item的padding都有8px */
  padding: 8px;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    /*  paddingtop:66.66%是相对于图片的宽度的，保证每张图片的大小是一致的（宽比高=3比2）。每张图片都宽100%的话它们的高度不一样，就不整齐。 */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      /* 给图片绝对定位 */
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
  
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    /* 动态的颜色 */
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 12px; 
    }

    /* 星星的间距 */
    svg{
      margin-right: -8px;
    }

    
  }
`