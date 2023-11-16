import styled from "styled-components"

export const RoomsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* 每个item的padding都有8px 整体的两边也会多8px，设置负值解决了这个问题. */
    margin: 0 -8px;
`