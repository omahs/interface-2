import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zindex.loading};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterDiv = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.h3`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gray40};
`;
