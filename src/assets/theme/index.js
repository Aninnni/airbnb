// 用styled-components 来管理主题。
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },

  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  // 头像的阴影动画效果
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `  
  }
}

export default theme