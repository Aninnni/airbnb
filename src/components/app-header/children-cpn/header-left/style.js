import styled from "styled-components";


export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* 往模板字符串里塞东西，它相当于一个函数，然后可以接收props */
  color: ${props => props.theme.color.primaryColor};

  .logo {
    margin: 0px 80px;
    cursor: pointer;
  }
`