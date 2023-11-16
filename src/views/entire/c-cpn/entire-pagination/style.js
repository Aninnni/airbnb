import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

      .desc {
        margin-top: 16px;
      }

      .ant-pagination-item {
        margin: 0 10px;
      }
      .ant-pagination-item-active {
        border-radius:50%;
        border-color: #222;
        background-color: #222;
      }
      .ant-pagination-item-active a {
        color: #fff;
      }

      .ant-select {
        display: none;
      }

  }


`